// Compatibility exports for the original design components.
// The current portfolio and CV share src/data/profile.json.
import profile from './profile.json';
export const personal = profile;
export const experience = profile.experience;
export const projects = profile.projects;
export const education = profile.education;
export const skillGroups = profile.skills;
export const tools = ['IBM Maximo', 'Git', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'];
export const techStrip = ['Java', 'Spring Boot', 'IBM Maximo', 'OSLC', 'MIF', 'Angular', 'React', 'Flutter', 'OpenShift', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Azure DevOps'];
