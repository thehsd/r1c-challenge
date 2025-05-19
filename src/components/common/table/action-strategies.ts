import type { ArticleRowData } from "./type";

type ActionHandler = (rowData: ArticleRowData) => void;

export const editStrategy: ActionHandler = (rowData) => {
  // Implement your edit logic here
  console.log("Editing row:", rowData);
  alert(`Editing row with ID: ${rowData.id}`); // Using alert for demonstration, replace with proper UI
};

export const deleteStrategy: ActionHandler = (rowData) => {
  // Implement your delete logic here
  console.log("Deleting row:", rowData);
  if (confirm(`Are you sure you want to delete row with ID: ${rowData.id}?`)) {
    // Using confirm for demonstration
    alert(`Row with ID: ${rowData.id} deleted.`); // Replace with proper UI update
  }
};
