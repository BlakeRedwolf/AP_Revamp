var RecaptchaOptions = { theme: 'white' };

jQuery(document).ready(function() {
  jQuery('div.item', document).mouseover(function() { jQuery(this).addClass('overDivItem'); }).mouseout(function() { jQuery(this).removeClass('overDivItem'); });

  jQuery('a.email img', document).mouseover(function() { jQuery(this).addClass('emailImgHover'); }).mouseout(function() { jQuery(this).removeClass('emailImgHover'); });

  jQuery('a.print img', document).mouseover(function() { jQuery(this).addClass('printImgHover'); }).mouseout(function() { jQuery(this).removeClass('printImgHover'); });

  jQuery('a.backLink, #back', document).click(function() { history.back(); return false; });

  jQuery('.submitSearch').click(function() { if (jQuery('#form-search input').val() != '') { jQuery('#form-search').submit(); } })

  jQuery('#search-button').click(function() { if (jQuery('#searchbox').val() != '') { jQuery('#search-form').submit(); } })

  jQuery('#inputAddCart').click(function() {
    dateDelivery = new Date(parseInt(jQuery('#year').val()), parseInt(jQuery('#month').val()), parseInt(jQuery('#day').val()));
    dateCurrent = new Date();
    if (jQuery('#quantity').val() == '') {
      alert('The "Quantity" is required');
    } else if (parseInt(jQuery('#quantity').val()) < (parseInt(jQuery('#quantityMin').val()))) {
      alert('The "Quantity" is low to Minimum');
    } else if (dateDelivery.getTime() <= dateCurrent) {
      alert('You have entered an invalid Date Needed in Hand.  It needs to be a date in the future.');
    } else {
      jQuery('#formAddCart').submit();
    }
  });




  jQuery('#inputAddQuote').click(function() {
    dateDelivery = new Date(parseInt(jQuery('#year').val()), parseInt(jQuery('#month').val()), parseInt(jQuery('#day').val()));
    dateCurrent = new Date();
    if (jQuery('#quantity').val() == '') {
      alert('The "Quantity" is required');
    } else if (parseInt(jQuery('#quantity').val()) < (parseInt(jQuery('#quantityMin').val()))) {
      alert('The "Quantity" is low to Minimum');
    } else if (dateDelivery.getTime() <= dateCurrent) {
      alert('You have entered an invalid Date Needed in Hand.  It needs to be a date in the future.');
    } else if (jQuery('#customer_name').val() == '') {
      alert('Your name can not be empty');
    } else if (jQuery('#customer_email').val() == '') {
      alert('Your email can not be empty');
    } else {
      jQuery('#formAddQuote').submit();
    }
  });




  jQuery('#billing').click(function() {
    jQuery('input[name=billing-name]').attr('value', jQuery('input[name=your-name]').val());
    jQuery('input[name=billing-company]').attr('value', jQuery('input[name=your-company]').val());
    jQuery('input[name=billing-phone]').attr('value', jQuery('input[name=your-phone]').val());
    jQuery('input[name=billing-x]').attr('value', jQuery('input[name=your-x]').val());
    jQuery('input[name=billing-email]').attr('value', jQuery('input[name=your-email]').val());
  });

  jQuery('#shipping').click(function() {
    jQuery('input[name=shipping-name]').attr('value', jQuery('input[name=billing-name]').val());
    jQuery('input[name=shipping-company]').attr('value', jQuery('input[name=billing-company]').val());
    jQuery('input[name=shipping-address]').attr('value', jQuery('input[name=billing-address]').val());
    jQuery('input[name=shipping-city]').attr('value', jQuery('input[name=billing-city]').val());
    //jQuery('input[name=shipping-state]').attr('value', jQuery('input[name=billing-state]').val());
    var theval = jQuery('#billing-state').val();

    jQuery('#shipping-state option[value="' + theval + '"]').prop('selected', true);
    jQuery('input[name=shipping-zip]').attr('value', jQuery('input[name=billing-zip]').val());
    //jQuery('input[name=shipping-country]').attr('value', jQuery('input[name=billing-country]').val());
    jQuery('input[name=shipping-phone]').attr('value', jQuery('input[name=billing-phone]').val());
    jQuery('input[name=shipping-x]').attr('value', jQuery('input[name=billing-x]').val());
  });

  jQuery('#clear').click(function() {
    if (confirm('You are about the clear out all of the information on this page.')) {
      jQuery('input[type=text], textarea').attr('value', '');
    }
  });

  jQuery('#continue').click(function() {
    if (trim(jQuery('input[name=your-name]').val()) == '') {
      alert('Please fill in the "your name" field.');
    } else if (jQuery('input[name=your-name]').val().length < 2) {
      alert('Please enter at least 2 characters in the "your name" field.');
    } else if (trim(jQuery('input[name=your-phone]').val()) == '') {
      alert('Please fill in the "phone" field.');
    } else if (jQuery('input[name=your-phone]').val().length < 10 || (jQuery('input[name=billing-phone]').val().length < 10 && jQuery('input[name=billing-phone]').val() != '') || (jQuery('input[name=shipping-phone]').val().length < 10 && jQuery('input[name=shipping-phone]').val() != '')) {
      alert('Please enter at least 10 characters in the "phone" field.');
    } else if (!(/^(\+)?([0-9-])*$/.test(jQuery('input[name=your-phone]').val())) || (!(/^(\+)?([0-9-])*$/.test(jQuery('input[name=billing-phone]').val())) && jQuery('input[name=billing-phone]').val() != '') || (!(/^(\+)?([0-9-])*$/.test(jQuery('input[name=shipping-phone]').val())) && jQuery('input[name=shipping-phone]').val() != '')) {
      alert("The phone number you entered for the 'phone' field is not valid.  Please make sure to enter the phone number in the form XXX-XXX-XXXX.  International phone numbers should begin with a '+' sign.");
    } else if (trim(jQuery('input[name=your-x]').val()) != '' && jQuery('input[name=your-x]').val() != ('' + parseInt(jQuery('input[name=your-x]').val()))) {
      alert('Please enter only numbers in the "phone" field.');
    } else if (trim(jQuery('input[name=your-email]').val()) == '') {
      alert('Please fill in the "email" field.');
    } else if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(jQuery('input[name=your-email]').val())) || (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(jQuery('input[name=billing-email]').val())) && jQuery('input[name=billing-email]').val() != '')) {
      alert("The email address you entered in the 'email' field is not valid.  You can only use letters, numbers, and periods.  In addition, there must be one '@' sign and no spaces in an email address.");
    } else {
      jQuery('#finish-cart').submit();
    }
  });

  jQuery('#continue2').click(function() {
    var datecard = new Date();
    if (trim(jQuery('select[name=PayMethod]').val()) == '') {
      alert('Please select a payment method');
    } else if (trim(jQuery('input[name=CCNum]').val()) == '') {
      alert('Please fill in the credit card number field.');
    } else if (!jQuery("#finish-cart").validate().element('#CCNum')) {
      alert('The card number you entered is not valid.  Please make sure you entered it correctly and that the card type is correct.');
    } else if (trim(jQuery('select[name=CCExpDtMo]').val()) == '0' || trim(jQuery('select[name=CCExpDtYr]').val()) == '0') {
      alert('Please fill in the credit card expiration date.');
    } else if (!((datecard.getFullYear() <= parseInt(jQuery('select[name=CCExpDtYr]').val())) && (((datecard.getMonth() + 1) <= parseInt(jQuery('select[name=CCExpDtMo]').val())) || ((datecard.getMonth() + 1) > parseInt(jQuery('select[name=CCExpDtMo]').val()) && (parseInt(jQuery('select[name=CCExpDtYr]').val()) > datecard.getFullYear()))))) {
      alert('The credit card expiration date you entered has expired.  Please verify that the date you entered is accurate.');
    } else if (trim(jQuery('input[name=CCVCode]').val()) == '') {
      alert('Please fill in the "card security code" field.');
    } else if (trim(jQuery('input[name=CCName]').val()) == '') {
      alert('Please fill in the "name on credit card" field.');
    } else {
      jQuery('#finish-cart').submit();
    }
  });

  jQuery('#continue3').click(function() {
    jQuery('#finish-cart').submit();

  });

  var dateCalendar = new Date();
  dateCalendar.setFullYear((dateCalendar.getFullYear() + 2), 11, 31);

  $("#calendar").datepicker({
    buttonImage: 'images/buttons/calendar.png',
    buttonImageOnly: true,
    minDate: '+1D',
    maxDate: dateCalendar,
    showOn: 'button',
    showButtonPanel: true,
    showWeek: true,
    firstDay: 1,
    onSelect: function(dateText, inst) {
      var theDate = new Date(Date.parse($(this).datepicker('getDate')));
      var dateCurrent = new Date();
      jQuery("#month option").eq(theDate.getMonth() + 1).attr("selected", "selected");
      jQuery("#day option").eq(theDate.getDate()).attr("selected", "selected");
      jQuery("#year option").eq(theDate.getFullYear() - dateCurrent.getFullYear() + 1).attr("selected", "selected");
    }
  });

  jQuery('a.ajax').colorbox({
    photo: true,
    maxWidth: 600,
    maxHeight: 600
  });

  jQuery('a.ajax.cboxElement').click(function(e) {
    e.preventDefault();
  });

  jQuery('.submitEmailForm').click(function() {
    if (trim(jQuery('input[name=emailTo]').val()) == '') {
      alert('Email To is required');
    } else if (trim(jQuery('input[name=yourName]').val()) == '') {
      alert('Your Name is required');
    } else if (trim(jQuery('input[name=yourEmail]').val()) == '') {
      alert('Your Email is required');
    } else if (trim(jQuery('input[name=subject]').val()) == '') {
      alert('Subject is required');
    } else if (trim(jQuery('input[name=textAreaEmail]').val()) == '') {
      alert('Message is required');
    } else if (trim(jQuery('input[name=recaptcha_response_field]').val()) == '') {
      alert('Text Captcha is required');
    } else {
      jQuery('#formEmail').submit();
    }
  });

  jQuery('#closePag').click(function(e) {
    window.close();
  });
});

function trim(myString) {
  if (typeof(myString) != 'undefined') {
    return myString.replace(/^\s+/g, '').replace(/\s+$/g, '');
  }

  return myString;
}