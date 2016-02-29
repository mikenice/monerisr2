var FormValidations = (function($) {

  var gatewayServices = function() {
    $('#GatewaySubscription').validate({
        rules: {
            'Request.BusinessName': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.PhoneAreaCode': {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 7,
                maxlength: 7,
                digits: true
            },
            'Request.City': 'required',
            'Request.Province': 'required'
        },
        messages: {
            'Request.BusinessName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
            },
            'Request.FirstName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.LastName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.PhoneAreaCode': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
            },
            'Request.PhoneNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
            },
            'Request.City': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.Province': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
        }
    });
    $('.reset').click(function () {
        // validator.resetForm();
        this.form.reset();
    });
  };

  var bePaymentReady = function() {
    $('#AirMilesRewardForm').validate({
        rules: {
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.BusinessName': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            'Request.City': 'required',
            'Request.Province': 'required',
        },
        messages: {
            'Request.FirstName': '(Please enter)',
            'Request.LastName': '(Please enter)',
            'Request.BusinessName': '(Please enter)',
            'Request.EmailAddress': {
                required: '(Please enter)',
                email: 'Please enter a valid Email Address'
            },
            'Request.PhoneNumber': {
                required: '(Please enter)',
                minlength: '(Please enter)',
                maxlength: '(Please enter)',
                digits: '(Please enter)'
            },
            'Request.City': '(Please enter)',
            'Request.Province': '(Please select)',
        }
    });
  };

  var airMiles = function() {
    $(' #AirMilesRewardForm').validate({
        rules: {
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.BusinessName': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.PhoneAreaCode': {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 7,
                maxlength: 7,
                digits: true
            },
            'Request.City': 'required',
            'Request.Province': 'required',
        },
        messages: {
            'Request.FirstName': '(Please enter)',
            'Request.LastName': '(Please enter)',
            'Request.BusinessName': '(Please enter)',
            'Request.EmailAddress': {
                required: '(Please enter)',
                email: '(Please enter a valid Email Address)'
            },
            'Request.PhoneAreaCode': {
                required: '(Please enter)',
                minlength: '(Please enter)',
                maxlength: '(Please enter)',
                digits: '(Please enter)'
            },
            'Request.PhoneNumber': {
                required: '(Please enter)',
                minlength: '(Please enter)',
                maxlength: '(Please enter)',
                digits: '(Please enter)'
            },
            'Request.City': '(Please enter)',
            'Request.Province': '(Please select)',
        }
    });
  };

  var ecommerceExpressStepOne = function() {
    $('#EcommerceApplyStep1').validate({
        rules: {
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.DateOfBirth': 'required',
            'Request.EmailAddress': 'required',
            'Request.ConfirmEmailAddress': 'required',
            'Request.PreferredLanguage': 'required',
            'Request.BusinessName': 'required',
            'Request.StreetNumber': 'required',
            'Request.StreetName': 'required',
            'Request.StreetType': 'required',
            'Request.City': 'required',
            'Request.Province': 'required',
            'Request.PostalCode': 'required',
            'Request.PhoneNumber': 'required',
            'Request.ProductServiceSold': 'required',
            'Request.AverageTransAmount': 'required',
            'Request.InstitutionNumber': 'required',
            'Request.BranchTransitNumber': 'required',
            'Request.BankAccountNumber': 'required',
            'Request.ReadTerms': 'required',
        },
        messages: {
            'Request.FirstName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.LastName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.DateOfBirth': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.EmailAddress': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.ConfirmEmailAddress': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.PreferredLanguage': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.BusinessName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.StreetNumber': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.StreetName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.StreetType': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.City': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.Province': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.PostalCode': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.PhoneNumber': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.ProductServiceSold': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.AverageTransAmount': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.InstitutionNumber': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.BranchTransitNumber': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.BankAccountNumber': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
            'Request.ReadTerms': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> required',
        }
    });
  };

  var unsubscribe = function() {
    $('#Unsubscribe').validate({
        rules: {
            'Request.EmailAddress': {
                required: true,
                email: true
            }
        },
        messages: {
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
            }
        }
    });
  };

  var subscribe = function() {
    $('#Subscribe').validate({
        rules: {
            'Request.EmailAddress': {
                required: true,
                email: true
            }
        },
        messages: {
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
            }
        }
    });
  };

  var doNotCall = function() {
    $('#DoNotContact').validate({
        rules: {
            'Request.CompanyName': 'required',
            'Request.BusinessTelephoneNumberAreaCode': {
                required: true,
                minlength: 3,
                maxlength: 3,
                digits: true
            },
            'Request.BusinessTelephoneNumber': {
                required: true,
                minlength: 7,
                maxlength: 7,
                digits: true
            },
            'Request.Captcha': 'required'
        },
        messages: {
            'Request.CompanyName': ' Please enter Company Name.',
            'Request.BusinessTelephoneNumberAreaCode': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.'
            },
            'Request.BusinessTelephoneNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter Phone Number.'
            },
            'Request.Captcha': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Required'
        }
    });
    $('.reset').click(function () {
        // validator.resetForm();
        this.form.reset();
    });
  };

  var posSoftwarePartnersRequest = function() {
    $('#POSSoftPart').validate({
        rules: {
            'Request.BusinessName': 'required',
            'Request.RequestorName': 'required',
            'Request.City': 'required',
            'Request.Province': 'required',
            'Request.Country': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            'Request.ExistingCustomer': 'required',
            'Request.Captcha': 'required'
        },
        messages: {
            'Request.BusinessName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.RequestorName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.City': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.Province': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.Country': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
            },
            'Request.PhoneNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
            },
            'Request.ExistingCustomer': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.Captcha': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
        }
    });
    $('.reset').click(function () {
        validator.resetForm();
        this.form.reset();
    });
    // select OR unselect all checkboxes
    $('#POSSoftPart').ready(function ($) {
        $('#solutionlist').click(function (event) {              //on click
            if (this.checked) {                                 // check select status
                $('input[type="checkbox"]').each(function () {   //loop through each checkbox
                    this.checked = true;                        //select all checkboxes with type 'checkbox'              
                });
            } else {
                $('input[type="checkbox"]').each(function () {   //loop through each checkbox
                    this.checked = false;                       //deselect all checkboxes with type "checkbox"                      
                });
            }
        });
    });
  };

  var officeOfCeo = function() {
    $('#OfficeCEO').validate({
        rules: {
            'Request.BusinessName': 'required',
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            'Request.LanguagePref': 'required',
            'Request.NatureRequest': 'required',
            'Request.HowHelp': 'required'
        },
        messages: {
            'Request.BusinessName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.FirstName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.LastName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
            },
            'Request.PhoneNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
            },
            'Request.LanguagePref': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.NatureRequest': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.HowHelp': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
        }
    });
  };

  var customerRelationsRequest = function() {
    $('#CustomerRelations').validate({
        rules: {
            'Request.BusinessName': 'required',
            'Request.FirstName': 'required',
            'Request.LastName': 'required',
            'Request.EmailAddress': {
                required: true,
                email: true
            },
            'Request.PhoneNumber': {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true
            },
            'Request.MerchantNumber': {
                required: true,
                digits: true
            },
            'Request.LanguagePref': 'required',
            'Request.NatureRequest': 'required',
            'Request.HowHelp': 'required'
        },
        messages: {
            'Request.BusinessName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.FirstName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.LastName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.EmailAddress': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
            },
            'Request.PhoneNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
            },
            'Request.MerchantNumber': {
                required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
                digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
            },
            'Request.LanguagePref': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
            'Request.NatureRequest': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            'Request.HowHelp': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
        }
    });
  };

  var contactMonerisSecurity = function() {
    $('#SecurityPractices').validate({
      rules: {
        'Request.Subject': 'required',
        'Request.RequestorName': 'required',
        'Request.EmailAddress': {
            required: true,
            email: true
        },
        'Request.DescriptionIncident': 'required'
      },
      messages: {
        'Request.Subject': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
        'Request.RequestorName': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
        'Request.EmailAddress': {
            required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
            email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
        },
        'Request.DescriptionIncident': '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select'
      }
    });
    $('.reset').click(function () {
        // FormValidations.contactMonerisSecurity.resetForm();
        this.form.reset();
    });
  };

  var applyNow = function() {
    if (!window.mvcClientValidationMetadata) {
      window.mvcClientValidationMetadata = [];
    }
    window.mvcClientValidationMetadata.push({
      "Fields": [{
        "FieldName": "Title",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "Title_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please select",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "FirstName",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "FirstName_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "LastName",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "LastName_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "BusinessName",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "BusinessName_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "EmailAddress",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "EmailAddress_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter a valid Email Address",
          "ValidationParameters": {},
          "ValidationType": "email"
        },
        {
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "PhoneAreaCode",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "PhoneAreaCode_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {
            "pattern": "^\\d+$"
          },
          "ValidationType": "regex"
        },
        {
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        },
        {
          "ErrorMessage": "The field PhoneAreaCode must be a string with a maximum length of 3.",
          "ValidationParameters": {
            "max":3
          },
          "ValidationType": "length"
        }]
      },
      {
        "FieldName": "PhoneNumber",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "PhoneNumber_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {
            "pattern": "^\\d+$"
          },
          "ValidationType": "regex"
        },
        {
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        },
        {
          "ErrorMessage": "The field PhoneNumber must be a string with a maximum length of 7.",
          "ValidationParameters": {
            "max":7
          },
          "ValidationType": "length"
        }]
      },
      {
        "FieldName": "PreferredContactTime",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "PreferredContactTime_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please select",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "City",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "City_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "Province",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "Province_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please select",
          "ValidationParameters": {},
          "ValidationType": "required"
        }]
      },
      {
        "FieldName": "PostalCode",
        "ReplaceValidationMessageContents": true,
        "ValidationMessageId": "PostalCode_validationMessage",
        "ValidationRules": [{
          "ErrorMessage": "Please enter",
          "ValidationParameters": {},
          "ValidationType": "required"
        },
        {
          "ErrorMessage": "Please enter a valid Postal Code (A1A1A1)",
          "ValidationParameters": {
            "pattern": "^\\d{5}(-\\d{4})?$"
          },
          "ValidationType": "regex"
        }]
      }],
      "FormId": "applyNow",
      "ReplaceValidationSummary": false
    });

    $('#applyNow').validate({
      rules: {
        Title: 'required',
        FirstName: 'required',
        LastName: 'required',
        BusinessName: 'required',
        EmailAddress: {
          required: true,
          email: true
        },
        PhoneAreaCode: {
          required: true,
          minlength: 3,
          maxlength: 3,
          digits: true
        },
        PhoneNumber: {
          required: true,
          minlength: 7,
          maxlength: 7,
          digits: true
        },
        PreferredContactTime: 'required',
        City: 'required',
        Province: 'required',
        PostalCode: {
          required: true,
          pattern: /^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ])\ {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/
        }
      },
      messages: {
        Title: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
        FirstName: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
        LastName: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
        BusinessName: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
        EmailAddress: {
          required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          email: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter a valid Email Address'
        },
        PhoneAreaCode: {
          required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
        },
        PhoneNumber: {
          required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          minlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          maxlength: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          digits: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter'
        },
        PreferredContactTime: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
        City: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
        Province: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please select',
        PostalCode: {
          required: '<svg><use xlink:href="#icon-form_error_arrow_up"></use></svg> Please enter',
          pattern: 'A1A1A1 or A1A 1A1'
        }
      }
    });
  };
  
  var init = function() {
    
  };

  return {
    gatewayServices: gatewayServices,
    bePaymentReady: bePaymentReady,
    airMiles: airMiles,
    ecommerceExpressStepOne: ecommerceExpressStepOne,
    unsubscribe: unsubscribe,
    subscribe: subscribe,
    doNotCall: doNotCall,
    posSoftwarePartnersRequest: posSoftwarePartnersRequest,
    officeOfCeo: officeOfCeo,
    customerRelationsRequest: customerRelationsRequest,
    contactMonerisSecurity: contactMonerisSecurity,
    applyNow: applyNow,
    init: init
  };
  
})(jQuery);