"""Generate the downloadable, text-based CV from the portfolio's shared content."""
import json
from pathlib import Path
from shutil import copyfile
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
data = json.loads((ROOT / "src/data/profile.json").read_text(encoding="utf-8"))
font_dir = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("CV", str(font_dir / "arial.ttf")))
pdfmetrics.registerFont(TTFont("CV-Bold", str(font_dir / "arialbd.ttf")))
pdfmetrics.registerFontFamily("CV", normal="CV", bold="CV-Bold")
ink = colors.HexColor("#172335")
blue = colors.HexColor("#285b90")
muted = colors.HexColor("#4b586b")
styles = {
    "name": ParagraphStyle("name", fontName="CV-Bold", fontSize=29, leading=34, textColor=ink, spaceAfter=5),
    "role": ParagraphStyle("role", fontName="CV-Bold", fontSize=11, leading=15, textColor=blue, spaceAfter=9),
    "contact": ParagraphStyle("contact", fontName="CV", fontSize=8.7, leading=13, textColor=muted, spaceAfter=4),
    "section": ParagraphStyle("section", fontName="CV-Bold", fontSize=10, leading=14, textColor=blue, spaceBefore=17, spaceAfter=9, keepWithNext=True),
    "title": ParagraphStyle("title", fontName="CV-Bold", fontSize=10.4, leading=14, textColor=ink, spaceAfter=4, keepWithNext=True),
    "meta": ParagraphStyle("meta", fontName="CV", fontSize=8.8, leading=12, textColor=muted, spaceAfter=7, keepWithNext=True),
    "body": ParagraphStyle("body", fontName="CV", fontSize=9.4, leading=13.7, textColor=ink, spaceAfter=7, alignment=TA_LEFT),
    "bullet": ParagraphStyle("bullet", fontName="CV", fontSize=9.3, leading=13.4, textColor=ink, leftIndent=10, firstLineIndent=-10, spaceAfter=6),
    "small": ParagraphStyle("small", fontName="CV", fontSize=8.7, leading=12.5, textColor=muted, spaceAfter=6),
}


def para(text, style="body"):
    return Paragraph(escape(text), styles[style])


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d4dde7"))
    canvas.line(42, 38, A4[0] - 42, 38)
    canvas.setFont("CV", 8)
    canvas.setFillColor(muted)
    canvas.drawString(42, 25, "Malek Ferjani | IBM Maximo · Java · Cloud & DevOps")
    canvas.drawRightString(A4[0] - 42, 25, str(doc.page))
    canvas.restoreState()


story = [
    para(data["name"].upper(), "name"),
    para(data["role"], "role"),
    Paragraph('Tunis, Tunisia · <link href="mailto:' + data["email"] + '">' + data["email"] + '</link> · ' + data["phone"], styles["contact"]),
    Paragraph('<link color="#285b90" href="' + data["linkedin"] + '">linkedin.com/in/malekferjani</link> · <link color="#285b90" href="' + data["website"] + '">cloud.tail07adef.ts.net</link>', styles["contact"]),
    para("PROFILE", "section"),
    para(data["summary"]),
    para("CORE STRENGTHS", "section"),
    para("Client communication: workshops, specifications and technical recommendations. Integration depth: Maximo customization and connected Java applications. Ownership: application delivery, infrastructure automation and independently operated platforms."),
    para("PROFESSIONAL EXPERIENCE", "section"),
]
for job in data["experience"]:
    story += [
        para(job["title"], "title"),
        para(job["company"] + " | " + job["period"], "meta"),
        para(job["context"], "small"),
    ]
    story += [para("• " + bullet, "bullet") for bullet in job["bullets"]]
    story.append(Spacer(1, 5))

story += [PageBreak(), para("PROJECTS & TECHNICAL EXPERTISE", "role")]
project_names = {
    "openstack": "Multi-Node Kubernetes Platform on OpenStack",
    "securegitops": "SecureGitOps — Secure Kubernetes Platform",
    "k3s": "Self-Hosted K3s Home Server",
}
for project_id in ["openstack", "k3s", "securegitops"]:
    project = next(p for p in data["projects"] if p["id"] == project_id)
    story.append(KeepTogether([
        para(project_names[project_id], "title"),
        para(project["status"] + " | " + " · ".join(project["tags"]), "meta"),
        para(project["contribution"]),
        Spacer(1, 5),
    ]))
story += [para("TECHNICAL SKILLS", "section")]
for skill in data["skills"]:
    story.append(Paragraph("<b>" + escape(skill["title"]) + ":</b> " + escape(" · ".join(skill["items"])), styles["body"]))
story += [para("EDUCATION & LANGUAGES", "section")]
for edu in data["education"]:
    story += [para(edu["degree"], "title"), para(edu["school"] + " | " + edu["period"] + " | " + edu["status"], "small")]
story += [para(" | ".join(data["languages"]), "body"), para("IBM LEARNING & CREDENTIALS", "section")]
story += [para("• " + item, "small") for item in data["credentials"]]
story += [para("Credentials with a listed July 2026 expiry are historical achievements; renewal is not claimed.", "small")]

output = ROOT / "public/Malek_Ferjani_resume.pdf"
doc = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=42, leftMargin=42,
                        topMargin=35, bottomMargin=52, title="Malek Ferjani — CV",
                        author="Malek Ferjani", subject=data["role"])
doc.build(story, onFirstPage=footer, onLaterPages=footer)
copyfile(output, ROOT / "Malek_Ferjani_resume.pdf")
print("Updated root CV and public download:", output)
