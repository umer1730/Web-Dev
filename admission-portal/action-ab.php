<!DOCTYPE html>
<html>
<head>
    <title>Form Submission Result</title>
    <style>
        table {
            font-family: Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        tr:nth-child(even) {
            background-color: lightblue;
        }
    </style>
</head>
<body>
    <div style="display: flex; width: 100%; justify-content: center;">
	<img src= "uet-lahore-logo-png_seeklogo-300387.png" width = "350" height="400";display: flex;justify-content: center>
</div>
<h2>Welcome...!</h2>
<table>
    <tr><th>Field</th><th>Value</th></tr>
    <tr><td>First Name</td><td><?php echo $_POST["fname"]; ?></td></tr>
    <tr><td>Middle Name</td><td><?php echo $_POST["mname"]; ?></td></tr>
    <tr><td>Last Name</td><td><?php echo $_POST["lname"]; ?></td></tr>
    <tr><td>Father's Name</td><td><?php echo $_POST["fathername"]; ?></td></tr>
    <tr><td>Mother's Name</td><td><?php echo $_POST["mothername"]; ?></td></tr>
    <tr><td>Monthly Income</td><td><?php echo $_POST["monthlyincome"]; ?></td></tr>
    <tr><td>Gender</td><td><?php echo $_POST["gender"]; ?></td></tr>
    <tr><td>Religion</td><td><?php echo $_POST["religion"]; ?></td></tr>
    <tr><td>Birthday</td><td><?php echo $_POST["birthday"]; ?></td></tr>
    <tr><td>Phone</td><td><?php echo $_POST["phone"]; ?></td></tr>
    <tr><td>Email</td><td><?php echo $_POST["email"]; ?></td></tr>
    <tr><td>Permanent Address</td><td><?php echo $_POST["paddress"]; ?></td></tr>
    <tr><td>Nationality</td><td><?php echo $_POST["nationality"]; ?></td></tr>
    <tr><td>Favourite Sports</td><td><?php echo $_POST["favsports"]; ?></td></tr>
    <tr><td>Hobbies</td><td><?php echo $_POST["hobby"]; ?></td></tr>
    <tr><td>Matric</td><td><?php echo isset($_POST["matric"]) ? 'Yes' : 'No'; ?></td></tr>
    <tr><td>O-Level</td><td><?php echo isset($_POST["o-level"]) ? 'Yes' : 'No'; ?></td></tr>
    <tr><td>A-Level</td><td><?php echo isset($_POST["A-level"]) ? 'Yes' : 'No'; ?></td></tr>
    <tr><td>F.Sc (Pre-Engineering)</td><td><?php echo isset($_POST["F.Sc (Pre-engineering)"]) ? 'Yes' : 'No'; ?></td></tr>
    <tr><td>F.Sc (Pre-Medical)</td><td><?php echo isset($_POST["F.Sc (Pre-medical)"]) ? 'Yes' : 'No'; ?></td></tr>
    <tr><td>Matric Marks</td><td><?php echo $_POST["matricMarks"]; ?></td></tr>
    <tr><td>Intermediate Marks</td><td><?php echo $_POST["Intermarks"]; ?></td></tr>
    <tr><td>Ecat Marks</td><td><?php echo $_POST["ecatmarks"]; ?></td></tr>
    <tr><td>School Name</td><td><?php echo $_POST["schoolname"]; ?></td></tr>
    <tr><td>College Name</td><td><?php echo $_POST["collegename"]; ?></td></tr>
    <tr><td>Program Applied</td><td><?php echo $_POST["programsoffer"]; ?></td></tr>
    <tr><td>About You</td><td><?php echo nl2br($_POST["aboutYou"]); ?></td></tr>
    <tr><td>Favourite Color</td><td><div style="width: 50px; height: 20px; background-color: <?php echo $_POST["favcolor"]; ?>;"></div></td></tr>
</table>

</body>
</html>

