// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// final code below

// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.textCenter;
//                     doc.defaultStyle.fontSize = 13;
                    
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
    
// });






// 


//  secode final code for manpower

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize =14;
                   

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                         // doc.styles.tableBody.border = '1px solid #000'; // Add table borders
//                     });
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });
//  Final Code Add here

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize = 11;

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 1; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 14; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });


 
// finly get some good code

// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'csv', 
//             'excel', 
//             {
//                 extend: 'pdf',
//                 customize: function (doc) {
//                     // Change page size and orientation to A3
//                     doc.pageOrientation = 'landscape';
//                     doc.pageSize = 'A3';
//                     doc.defaultStyle.fontSize = 10;
                    
//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });

//                     // Increase font size for header
//                     doc.content[1].table.headerRows = 2; // Make sure header is only shown once
//                     doc.styles.tableHeader.fontSize = 10; // Set font size for header
//                     doc.styles.tableHeader.alignment = 'center'
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to all columns except the first three and last one
//     table.columns().every(function() {
//         var colIdx = this.index();
//         if (colIdx !== 0 && colIdx !== 1 && colIdx !== 2 && colIdx !== table.columns().count() - 1) {
//             table.column(colIdx).nodes().to$().addClass('text-center');
//         }
//     });

//     // Calculate total present and total holidays for each row
//     table.rows().every(function() {
//         var rowData = this.data();
//         var totalPresent = 0;
//         var totalHoliday = 0;
//         for (var i = 4; i < rowData.length - 1; i++) { // Exclude first three columns and the last one
//             if (rowData[i] === 'P') {
//                 totalPresent++;
//             } else if (rowData[i] === 'H') {
//                 totalHoliday++;
//             }
//         }
//         rowData[rowData.length - 1] = 'P: ' + totalPresent + ', H: ' + totalHoliday;
//         this.data(rowData);
//     });

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });


// // randome code
$(document).ready(function() {
    // Get the current date
    var currentDate = new Date();
    // Get the month and convert it to a string with the full month name
    var currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });

    var table = $('#example').DataTable({
        buttons: [
            'copy', 
            'csv', 
            'excel', 
            {
                extend: 'pdf',
                customize: function (doc) {
                    // Change page size and orientation to A3
                    doc.pageOrientation = 'landscape';
                    doc.pageSize = 'A3';
                    doc.defaultStyle.fontSize = 10;
                    
                    // Apply text-center class to 9th and 10th columns in PDF
                    doc.content[1].table.body.forEach(function(row) {
                        row[8].alignment = 'center'; // 9th column alignment
                        row[9].alignment = 'center'; // 10th column alignment
                    });

                    // Increase font size for header
                    doc.content[1].table.headerRows = 2; // Make sure header is only shown once
                    doc.styles.tableHeader.fontSize = 10; // Set font size for header
                    doc.styles.tableHeader.alignment = 'center'
                }
            }, 
            'print', 
            'add', 
            'remove'
        ]
    });

    // Update the title to display the current month
    $('.title').text("Manpower List Month Of " + currentMonth + "-" + currentDate.getFullYear());

    // Apply text-center class to all columns except the first three and last one
    table.columns().every(function() {
        var colIdx = this.index();
        if (colIdx !== 0 && colIdx !== 1 && colIdx !== 2 && colIdx !== table.columns().count() - 1) {
            table.column(colIdx).nodes().to$().addClass('text-center');
        }
    });

    // Calculate total present and total holidays for each row
    table.rows().every(function() {
        var rowData = this.data();
        var totalPresent = 0;
        var totalHoliday = 0;
        for (var i = 4; i < rowData.length - 1; i++) { // Exclude first three columns and the last one
            if (rowData[i] === 'P') {
                totalPresent++;
            } else if (rowData[i] === 'H') {
                totalHoliday++;
            }
        }
        rowData[rowData.length - 1] = 'P: ' + totalPresent + ', H: ' + totalHoliday;
        this.data(rowData);
    });

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
});







function changeMonth() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentDate = new Date(); // Get the current date
    var currentMonth = currentDate.getMonth(); // Get the current month index
    var currentYear = currentDate.getFullYear(); // Get the current year

    // Find the next month index (if December, go back to January)
    var nextMonthIndex = (currentMonth === 11) ? 0 : currentMonth + 1;
    var nextMonth = months[nextMonthIndex]; // Get the name of the next month

    // Update the month name in the table
    var monthHeader = document.querySelector('.text-center.text-bg-Info');
    monthHeader.innerHTML = "<h5>Week of " + nextMonth + "-" + currentYear + "</h5>";

    // Update the month name in the footer
    var footer = document.querySelector('footer');
    footer.innerHTML = "&copy; Copy Writing Mahabub_Alam from - #" + currentYear;
}
