zE('webWidget', 'setLocale', 'id');
zE('webWidget', 'chat:addTags', ['Trive Invest-id']);

window.zESettings = {
    webWidget: {
        zIndex: 2147483000,
        color: {
            theme: '#74d3ee'
        },
        chat: {
            title: {
                '*': 'Trive Invest Live Chat',
                id: 'Trive Invest Live Chat'
            },
            departments: {
                enabled: [],
                select: 'Trive Invest Support Team-ID',
            },
            concierge: {
                name: "Live Chat",
                title: { "*": "Customer Support" },
            }
        }
    }
};

var finalName, finalPhone, nameZendesk, emailZendesk, phoneZendesk, zenFormContent, collapseContent, zendeskSelectCategory, offlineName, phoneCode, ZendeskButton, zendeskPreFormArea, offlineArea, zendeskCustomForm, customFormMin;

zenFormContent = document.getElementById("zen-formContent");
collapseContent = document.getElementById("collapseContent");
zendeskSelectCategory = document.getElementById("zendeskSelectCategory");
offlineName = document.getElementById("offlineName");
ZendeskButton = document.getElementById("ZendeskButton");
zendeskPreFormArea = document.getElementById("zendeskPreFormArea");
offlineArea = document.getElementById("offlineArea");
zendeskCustomForm = document.getElementById("zendeskCustomForm");
customFormMin = document.getElementById("customFormMin");

function onlyNumberKey(evtNumber) {
    var ASCIICodeNumber = (evtNumber.which) ? evtNumber.which : evtNumber.keyCode
    if (ASCIICodeNumber > 31 && (ASCIICodeNumber < 48 || ASCIICodeNumber > 57))
        return false;
    return true;
}

// function onlyLetterKey(evtLetter) {
//     var ASCIICodeLetter = (evtLetter.which) ? evtLetter.which : evtLetter.keyCode;
//     if (ASCIICodeLetter === 32 || (ASCIICodeLetter >= 65 && ASCIICodeLetter <= 90) || (ASCIICodeLetter >= 97 && ASCIICodeLetter <= 122)) {
//         return true;
//     }
//     return false;
// }


//UserLogin control
var userLog = false;
function userLoginControl() {
    if (userLog == true) {
        zenFormContent.style.display = "none";
        collapseContent.style.display = "none";
        zendeskSelectCategory.style.display = "block";
        nameZendesk = document.getElementById("nameZendesk").value;
        emailZendesk = document.getElementById("emailZendesk").value;
        phoneZendesk = document.getElementById("phoneZendesk").value;

        offlineName.innerHTML = nameZendesk;
    }
    else {
        nameZendesk = document.getElementById("nameZendesk").value;
        emailZendesk = document.getElementById("emailZendesk").value;
        phoneZendesk = document.getElementById("phoneZendesk").value;
        checkedValue1 = document.getElementById("checkboxControl1");
        finalPhone = phoneCode + phoneZendesk;
    }
}
userLoginControl()
//UserLogin control

//Session Control
var sessionChat = localStorage['ZD-store'];
if (sessionChat == null) {
    zE('webWidget', 'hide');
}
else {
    var sessionParse = JSON.parse(localStorage["ZD-store"]);
    var sessionParseVal = sessionParse.is_chatting;
    if (sessionParseVal === true && localStorage['chatStarted'] === 'true') {
        zendeskWidgetOpen();
    }
    else {
        zE('webWidget', 'hide');
    }

}

zE('webWidget:on', 'chat:start', function () {
    sessionParse = JSON.parse(localStorage["ZD-store"]);
    sessionParseVal = sessionParse.is_chatting;
});
zE('webWidget:on', 'chat:end', function () {
    sessionParse = JSON.parse(localStorage["ZD-store"]);
    sessionParseVal = sessionParse.is_chatting;
    localStorage.setItem("chatStarted", false);
});



var dropdown, dropdownOption;
var countryCode;


fetch('../../CountryCodes.json')
    .then((response) => response.json())
    .then((data) => {
        countryCode = data;
        for (var i = 0; i < countryCode.length; i++) {
            dropdownOption = document.createElement("option");
            dropdownOption.text = countryCode[i].dial_code;
            dropdownOption.value = countryCode[i].dial_code;
            if (countryCode[i].name === "Indonesia") {
                dropdownOption.setAttribute("selected", "selected");
            }
            dropdown = document.getElementById('locality-dropdown');
            dropdown.appendChild(dropdownOption);
        }
        selectedOptionValue = dropdown.value
    });


zE('webWidget:on', 'chat:departmentStatus', function (dept) {
    if (dept.name === "Trive Invest Support Team-ID" && dept.status === 'online') {
        ZendeskButton.addEventListener("click", function () {
            formActive();
        });
    }
    else if (dept.name === "Trive Invest Support Team-ID" && dept.status === 'offline') {
        zendeskPreFormArea.style.display = "none";
        zendeskSelectCategory.style.display = "none";
        offlineArea.style.display = "flex";
        ZendeskButton.addEventListener("click", function () {
            formActive();
        })
    }
});

//Form events
function formActive() {
    zendeskCustomForm.style.display = "block";
    ZendeskButton.style.display = "none";
}

function formDeactive() {
    zendeskCustomForm.style.display = "none";
    ZendeskButton.style.display = "block";
}

function zendeskWidgetOpen() {
    zendeskCustomForm.style.display = "none";
    ZendeskButton.style.display = "none";
    zE('webWidget', 'show');
    zE('webWidget', 'open');
}
customFormMin.addEventListener("click", function () {
    formDeactive();
})


//Form events

/*Select Category*/
var ticketCategory, ticketCategoryValue;
ticketCategory = document.getElementById("informationalCategory");

ticketCategory.addEventListener("change", function (event) {
    ticketCategoryValue = event.target.value;
    informationalCategoryErrorLabel.classList.remove("visible");
    ticketCategory.classList.remove("invalid");

});


//Form validation
var submit = document.getElementById("submit");
var nameValidation = document.getElementById("nameZendesk");
var mailValidation = document.getElementById('emailZendesk');
var phoneValidation = document.getElementById("phoneZendesk");
var checkedValidation1 = document.getElementById('checkboxControl1');
var checkedValidation2 = document.getElementById('checkboxControl2');


var nameErrorZendesk = document.getElementById("nameErrorZendesk");
var mailErrorZendesk = document.getElementById('mailErrorZendesk');
var phoneErrorZendesk = document.getElementById("phoneErrorZendesk");
var checkedError1 = document.getElementById('checkedError1');
var checkedError2 = document.getElementById('checkedError2');


var labelNameZendesk = document.getElementById("nameLabelZendesk");
var labelMailZendesk = document.getElementById("mailLabel");
var labelPhoneZendesk = document.getElementById("phoneLabel");
var labelCheck1 = document.getElementById("checkedLabel1");
var informationalCategoryErrorLabel = document.getElementById('informational_category_error');
var valid, nameValid, mailValid, phoneValid, checkboxValid1, checkboxValid2, ticketCategoryVal;
valid = nameValid = mailValid = phoneValid = checkboxValid1 = checkboxValid2 = ticketCategoryVal = false;
function validate(e) {
    e.preventDefault();
    function validateInput(inputElement, errorElement, validFlag) {
        if (!inputElement.value) {
            errorElement.classList.add("visible");
            inputElement.classList.add("invalid");
            validFlag = false;
            valid = false;
        } else {
            validFlag = true;
            valid = true;

        }
        return validFlag;
    }

    nameValid = userLog ? true : validateInput(nameValidation, nameErrorZendesk, nameValid);
    mailValid = userLog ? true : validateInput(mailValidation, mailErrorZendesk, mailValid);
    phoneValid = userLog ? true : validateInput(phoneValidation, phoneErrorZendesk, phoneValid);



    if (!checkedValidation1.checked) {
        checkedError1.classList.add("visible");
        checkedValidation1.classList.add("invalid");
        checkboxValid1 = false;
        if (userLog) {
            checkboxValid1 = true;
        }
    } else {
        checkboxValid1 = true;
    }

    if (!checkedValidation2.checked) {
        checkedError1.classList.add("visible");
        checkedValidation1.classList.add("invalid");
        checkboxValid2 = false;
        if (userLog) {
            checkboxValid2 = true;
        }
    } else {
        checkboxValid2 = true;
    }

    if (ticketCategoryValue == "-" || ticketCategoryValue == undefined) {
        informationalCategoryErrorLabel.classList.add("visible");
        ticketCategory.classList.add("invalid");
        ticketCategoryVal = false
    }
    else {
        ticketCategoryVal = true
    }

    valid = (nameValid && mailValid && phoneValid && checkboxValid1 && checkboxValid2 && ticketCategoryVal) ? true : false;
    return valid;
}

nameValidation.addEventListener("change", function () {
    nameErrorZendesk.classList.remove("visible");
    nameValidation.classList.remove("invalid");
});
mailValidation.addEventListener("change", function () {
    mailErrorZendesk.classList.remove("visible");
    mailValidation.classList.remove("invalid");
});
phoneValidation.addEventListener("change", function () {
    phoneErrorZendesk.classList.remove("visible");
    phoneValidation.classList.remove("invalid");
});
checkedValidation1.addEventListener("change", function () {
    checkedError1.classList.remove("visible");
    checkedValidation1.classList.remove("invalid");
});
checkedValidation2.addEventListener("change", function () {
    checkedError1.classList.remove("visible");
    checkedValidation2.classList.remove("invalid");
});

var phoneCode = null;
function getPhoneNumber(num) {
    phoneCode = num.options[num.selectedIndex].text;
}


function openZendeskWidget(e) {
    validate(e);
    zE('webWidget', 'updateSettings', {
        webWidget: {
            chat: {
                departments: {
                    enabled: [''],
                    select: "Trive Invest Support Team-ID",
                }
            }
        }
    });

    userLoginControl();


    if (valid == false) {
        console.log("")

    }
    else {
        e.preventDefault();
        zendeskPreFormArea.style.display = "none";
        zendeskSelectCategory.style.display = "block";
        var message = document.getElementById('messageZendesk').value;
        zendeskWidgetOpen();
        setTimeout(function () {
            zE('webWidget', 'chat:removeTags', ['account_services', 'deposit_and_withdrawal', 'technical_and_trading_issues', 'campaigns_and_offers', 'partner_services', 'research_and_trainings', 'complaints_trive_invest', 'general_inquiries']);
            zE('webWidget', 'identify', { name: nameZendesk, email: emailZendesk, phone: finalPhone });
            msg = "Halo, saya " + nameZendesk + " Saya sudah membaca dan menyetujui syarat dan ketentuan. " + message;
            zE('webWidget', 'chat:addTags', ['izinler-onaylandi-id', ticketCategoryValue]);
        }, 500);
        setTimeout(function () {
            zE('webWidget', 'chat:send', msg);
            localStorage.setItem("chatStarted", true);
        }, 510);
    }
}
