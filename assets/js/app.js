$('#invoice-number').change(function() {
    var invoiceNumber = $(this).val();
    console.log(invoiceNumber);
    $('#item_name').val('Invoice Payment: '+invoiceNumber);
});
