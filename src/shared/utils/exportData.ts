import { mkConfig, generateCsv, download } from "export-to-csv";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export const asXLSX = <Row>(rows: Row[], fileName: string) => {
  const workSheet = XLSX.utils.json_to_sheet(rows);
  const workBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet, fileName);
  XLSX.writeFileXLSX(workBook, `${fileName}.xlsx`);
};

export const asCSV = <
  Row extends { [k: string]: string | number; [k: number]: string | number }
>(
  rows: Row[],
  fileName: string
) => {
  const csvConfig = mkConfig({
    fieldSeparator: ",",
    filename: fileName,
    useKeysAsHeaders: true,
    decimalSeparator: ".",
  });
  const csv = generateCsv(csvConfig)(rows);
  download(csvConfig)(csv);
};

export const asPDF = (table: HTMLTableElement, fileName: string) => {
  const doc = new jsPDF();
  autoTable(doc, {
    html: table,
  });
  doc.save(`${fileName}.pdf`);
};
