"""Browser checks and screenshots for the local portfolio preview."""
import json
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "qa"
QA.mkdir(exist_ok=True)
BASE_URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:5173/"
errors = []
with sync_playwright() as p:
    browser = p.chromium.launch(channel="chrome", headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 1000}, device_scale_factor=1)
    page.on("pageerror", lambda error: (errors.append(str(error)), print("BROWSER ERROR:", error, flush=True)))
    page.goto(BASE_URL, wait_until="domcontentloaded")
    page.get_by_role("dialog").wait_for()
    page.get_by_text("READY TO EXPLORE", exact=False).wait_for()
    page.screenshot(path=str(QA / "welcome-desktop.png"))
    page.get_by_role("button", name="Enter portfolio", exact=True).click()
    page.get_by_role("dialog").wait_for(state="detached")
    page.wait_for_function("document.querySelector('.three-scene')?.dataset.renderer === 'webgl2'")
    page.evaluate("document.fonts.ready")
    page.screenshot(path=str(QA / "desktop.png"), full_page=True)
    assert page.locator("h1").count() == 1
    assert page.locator(".project-card").count() == 4
    page.get_by_role("button", name="skills", exact=True).click()
    assert "Maximo & enterprise integration" in page.get_by_role("log").inner_text()
    terminal_input = page.get_by_role("textbox", name="Terminal command")
    terminal_input.fill("not-a-command")
    terminal_input.press("Enter")
    assert "Unknown command" in page.get_by_role("log").inner_text()
    terminal_input.fill("projects")
    terminal_input.press("Enter")
    assert "Security built into the delivery workflow" in page.get_by_role("log").inner_text()
    terminal_input.press("ArrowUp")
    assert terminal_input.input_value() == "projects"
    page.get_by_role("button", name="resume", exact=True).click()
    cv_dialog = page.locator("dialog.cv-viewer")
    cv_dialog.wait_for()
    assert cv_dialog.locator("iframe.cv-viewer-frame, .cv-viewer-fallback").count() == 1
    page.keyboard.press("Escape")
    cv_dialog.wait_for(state="hidden")
    page.locator(".hero").get_by_role("button", name="View CV", exact=False).click()
    cv_dialog.wait_for()
    cv_dialog.get_by_role("button", name="Close CV preview").click()
    cv_dialog.wait_for(state="hidden")
    with page.expect_download() as terminal_download:
        page.get_by_role("button", name="download", exact=True).click()
    terminal_download.value.save_as(str(QA / "terminal-cv.pdf"))
    assert (QA / "terminal-cv.pdf").read_bytes() == (ROOT / "public/Malek_Ferjani_resume.pdf").read_bytes()
    page.get_by_role("button", name="Kubernetes platform", exact=True).click()
    page.get_by_role("button", name="Secure & observe", exact=False).click()
    assert "cert-manager" in page.locator("#architecture-detail").inner_text()
    page.get_by_role("button", name="Enterprise", exact=True).click()
    assert page.locator(".project-card").count() == 1
    page.get_by_text("Read project details", exact=True).click()
    assert page.get_by_role("heading", name="My contribution", exact=True).is_visible()
    page.get_by_role("button", name="Cloud & DevOps", exact=True).click()
    assert page.locator(".project-card").count() == 3
    page.get_by_role("button", name="All work", exact=True).click()
    assert page.locator(".project-card").count() == 4
    for link in page.locator('a[href^="#"]').all():
        target = link.get_attribute("href")[1:]
        assert page.locator('[id="' + target + '"]').count() == 1, target
    with page.expect_download() as info:
        page.locator('.hero a[download]').click()
    download = info.value
    download.save_as(str(QA / "downloaded-cv.pdf"))
    assert (QA / "downloaded-cv.pdf").read_bytes() == (ROOT / "public/Malek_Ferjani_resume.pdf").read_bytes()
    for width in [320, 375, 768, 1024, 1440]:
        page.set_viewport_size({"width": width, "height": 900})
        page.goto(BASE_URL, wait_until="domcontentloaded")
        page.get_by_role("dialog").wait_for()
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), "Intro overflow: " + str(width)
        page.get_by_role("button", name="Skip intro", exact=False).click()
        page.get_by_role("dialog").wait_for(state="detached")
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth"), "Horizontal overflow: " + str(width)
    page.set_viewport_size({"width": 375, "height": 812})
    page.goto(BASE_URL, wait_until="domcontentloaded")
    page.get_by_role("dialog").wait_for()
    page.screenshot(path=str(QA / "welcome-mobile.png"))
    page.keyboard.press("Escape")
    page.get_by_role("dialog").wait_for(state="detached")
    page.screenshot(path=str(QA / "mobile.png"), full_page=True)
    page.get_by_role("button", name="Open navigation").click()
    assert page.get_by_role("navigation").is_visible()
    page.get_by_role("navigation").get_by_role("link", name="Projects", exact=True).click()
    assert page.url.endswith("#projects")
    assert not page.get_by_role("navigation").is_visible()
    page.get_by_role("button", name="Open navigation").click()
    page.get_by_role("navigation").get_by_role("link", name="Strengths", exact=True).focus()
    page.keyboard.press("Escape")
    assert page.get_by_role("button", name="Open navigation").get_attribute("aria-expanded") == "false"
    page.emulate_media(reduced_motion="reduce")
    assert page.locator(".orbit-three").evaluate("e => getComputedStyle(e).animationName") == "none"
    page.locator("footer").get_by_role("button", name="Replay welcome", exact=False).click()
    page.get_by_role("dialog").wait_for()
    page.keyboard.press("Enter")
    page.get_by_role("dialog").wait_for(state="detached")
    assert not errors, errors
    browser.close()
report = {"status": "passed", "viewport_widths": [320, 375, 768, 1024, 1440], "checks": ["welcome boot, enter, skip and replay", "WebGL2 scene", "terminal commands, history and CV download", "interactive architecture", "project filters", "project details", "anchor targets", "PDF download matches generated CV", "mobile menu and Escape", "reduced motion", "no horizontal overflow", "no browser errors"]}
(QA / "browser-checks.json").write_text(json.dumps(report, indent=2))
print(json.dumps(report))
