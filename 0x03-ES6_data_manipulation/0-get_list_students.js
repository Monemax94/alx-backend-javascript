/**
 * This function retrieves a list of students.
 * @author Monday Odoh <https://github.com/Monemax94>
 * @returns {{id: Number, firstName: String, Location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Monday Odoh', location: 'Asaba' },
    { id: 2, firstName: 'JohnKennedy', location: 'PHC' },
    { id: 3, firstName: 'Andrew', location: 'Abuja' },
    { id: 5, firstName: 'Kenneth', location: 'Lagos' },
  ];
}
