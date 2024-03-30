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

$(document).ready(function() {
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
                    doc.defaultStyle.fontSize = 11;

                    // Apply text-center class to 9th and 10th columns in PDF
                    doc.content[1].table.body.forEach(function(row) {
                        row[8].alignment = 'center'; // 9th column alignment
                        row[9].alignment = 'center'; // 10th column alignment
                    });

                    // Increase font size for header
                    doc.content[1].table.headerRows = 1; // Make sure header is only shown once
                    doc.styles.tableHeader.fontSize = 14; // Set font size for header
                    doc.styles.tableHeader.alignment = 'center'
                }
            }, 
            'print', 
            'add', 
            'remove'
        ]
    });

    // Apply text-center class to 9th and 10th columns
    table.column(8).nodes().to$().addClass('text-center');
    table.column(9).nodes().to$().addClass('text-center');

    table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
});




// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: [
//             'copy', 
//             'pdf', 
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
//                     doc.styles.tableHeader.alignment = 'center';

//                     // Add page numbers
//                     var pageCount = doc.internal.getNumberOfPages();
//                     for (var i = 1; i <= pageCount; i++) {
//                         doc.setPage(i);
//                         doc.setFontSize(11);
//                         doc.text('Page ' + i + ' of ' + pageCount, doc.internal.pageSize.width - 60, 10);
//                     }
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

// //                     // Add table borders
//                     doc.content[1].table.widths = Array(doc.content[1].table.body[0].length + 1).join('*').split('');
//                     doc.content[1].table.body.forEach(function(row, i) {
//                         row.forEach(function(cell, j) {
//                             if (cell.text !== undefined) {
//                                 if (i === 0) {
//                                     cell.fillColor = 'black'; // Header background color
//                                 }
//                                 cell.border = [0.3, 0.3, 0.3, 0.3]; // Set border for all cells
//                             }
//                         });
//                     });

//                     // Apply text-center class to 9th and 10th columns in PDF
//                     doc.content[1].table.body.forEach(function(row) {
//                         row[8].alignment = 'center'; // 9th column alignment
//                         row[9].alignment = 'center'; // 10th column alignment
//                     });
//                 }
//             }, 
//             'print', 
//             'add', 
//             'remove'
//         ]
//     });

//     // Apply text-center class to 9th and 10th columns in DataTable
//     table.column(8).nodes().to$().addClass('text-center');
//     table.column(9).nodes().to$().addClass('text-center');

//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });









// 




  
    


