# Resume Files

This folder is for storing resume-related documents.

## Required File
- `resume.pdf` - Place your resume PDF file here

The resume modal on the About page is configured to:
1. Display an HTML version of the resume content (easily editable in about.html)
2. Provide a download button that links to `assets/documents/resume.pdf`

## To Update

### Update the HTML Resume Content
Edit the `.resume-html-content` section in `about.html` to update the displayed resume content.

### Update the PDF Resume
Simply replace the `resume.pdf` file in this folder with your updated version.

### Switch to PDF Embed View
If you prefer to show the PDF directly instead of HTML content, you can modify the resume modal content in `about.html`:

Replace the `.resume-html-content` div with:
```html
<div class="resume-pdf-container">
  <iframe src="assets/documents/resume.pdf" title="Resume PDF"></iframe>
</div>
```

### Switch to Image View
For an image-based resume, replace with:
```html
<div class="resume-image-container">
  <img src="assets/documents/resume-page1.png" alt="Resume Page 1">
  <img src="assets/documents/resume-page2.png" alt="Resume Page 2">
</div>
```
