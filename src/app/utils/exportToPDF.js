import { PDFDocument, rgb } from "pdf-lib";
import { saveAs } from "file-saver";

const exportToPDF = async (resumeData) => {
  const doc = await PDFDocument.create();

  const page = doc.addPage([600, 800]);

  const fontSize = 12;
  const color = rgb(0, 0, 0);

  page.drawText(`Full Name: ${resumeData.fullName}`, {
    x: 50,
    y: 750,
    size: fontSize,
    color: color,
  });

  page.drawText(`Contact: ${resumeData.contact}`, {
    x: 50,
    y: 725,
    size: fontSize,
    color: color,
  });

  page.drawText(`Summary: ${resumeData.summary}`, {
    x: 50,
    y: 700,
    size: fontSize,
    color: color,
  });

  page.drawText(`Experience: ${resumeData.experience}`, {
    x: 50,
    y: 675,
    size: fontSize,
    color: color,
  });

  page.drawText(`Education: ${resumeData.education}`, {
    x: 50,
    y: 650,
    size: fontSize,
    color: color,
  });

  page.drawText(`Skills: ${resumeData.skills}`, {
    x: 50,
    y: 625,
    size: fontSize,
    color: color,
  });

  const pdfBytes = await doc.save();

  saveAs(new Blob([pdfBytes], { type: "application/pdf" }), "resume.pdf");
};

export default exportToPDF;
