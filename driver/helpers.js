export const updateSubjectName = (subjectName) => {
  if (subjectName === "Programowanie zaawansowane 2") {
    return "PZ2";
  }

  if (subjectName === "Uczenie maszynowe") {
    return "ML";
  }

  if (subjectName === "Sieci komputerowe") {
    return "Sieci";
  }

  if (subjectName === "Modele wytwarzania oprogramowania") {
    return "Modele";
  }

  if (subjectName === "Data Engineering") {
    return "Data";
  }

  if (subjectName === "Teoria kompilacji i kompilatory") {
    return "TKiK";
  }

  return subjectName;
};
