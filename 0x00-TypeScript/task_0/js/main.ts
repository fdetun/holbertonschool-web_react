interface Student {
    firstName: string;
    lastName: string;
    age:number;
    location:string;
  }
  
  const StudentOne: Student = {
    firstName: 'Foued',
    lastName: 'Lamine',
    age: 25,
    location: 'Sfax',
  }
  const StudentTwo: Student = {
    firstName: 'Fde',
    lastName: 'tun',
    age: 26,
    location: 'is here',
  }
  const studentsList: Student[] = [StudentOne, StudentTwo];
  const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
const th: HTMLTableSectionElement = document.createElement('thead');
th.innerHTML = `<tr><th>firstName</th> <th>location</th></tr>`;
table.appendChild(th);
const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);
for (let el: number = 0; el < studentsList.length; el++) {
    const line: HTMLTableRowElement = document.createElement('tr');
    const a: HTMLTableCellElement = document.createElement('th');
    const b: HTMLTableCellElement = document.createElement('th');
    a.innerHTML = studentsList[el].firstName;
    b.innerHTML = studentsList[el].location;
    line.appendChild(a);
    line.appendChild(b);
    tbody.appendChild(line);
}

