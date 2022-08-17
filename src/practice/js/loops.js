let example;

example = 'Type of transporation modes are: <br/>';
example += '1. Air<br/>';
example += '2. Land<br/>';
example += '3. Water<br/>';

document.getElementById('example').innerHTML = example;

let while_Loop = 'Printing data using while loop: <br>';

let forLoop = 'Printing data using for loop: <br>';

let automobileCompanies = ['Alfa Romero', 'BMW', 'Cadillac', 'Dodge', 'Eicher', 'Ford', 'GMC', 'Hyundai', 'Infiniti', 'Jaguar', 'Koenigsegg', 'Lamborghini', 'Maserati', 'Nissan', 'Opel', 'Peugeot', 'Qoros', 'Rolls-Royce', 'Suzuki', 'Tesla', 'Ultima', 'Volkswagen', 'Wanderer', 'XPeng', 'Yulon', 'Zenos'];


// write a while loop and display all the automobileCompanies
let count = 0;
while (count < automobileCompanies.length) { 
    document.write( NodeList+ automobileCompanies + "<br />");
    count++;
}










document.getElementById('whileLoop').innerHTML = while_Loop;

// write a for loop and display all the automobileCompanies












document.getElementById('forLoop').innerHTML = forLoop;
