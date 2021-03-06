// WATS 3020 Mad Libs Assignment

// Prompt statements for each of the needed variables.

let honorific     = prompt('Please enter an honorific title (e.g. Mister or Colonel).');

let authorName    = prompt('What is your full name?');

let adjective1    = prompt("A word used to describe something.");

let vehicle       = prompt("A mode of transportation (e.g. plane, boat, etc.).");

let vehiclePart   = prompt("A a part of the vehicle you just named");

let parking       = prompt("A location where you park the vehicle you just named.");

let precious      = prompt("A precious object.");

let noiseMaker    = prompt("Something that makes a sound.");

let crowdBehavior = prompt("Something that people do together as a group.");

let adjective2    = prompt("A word used to describe something.");

let adjective3    = prompt("A word used to describe something.");

let color         = prompt("A color.");

let familyMember  = prompt("The name of a family relationship (e.g. sister, father, etc.).");

let organ         = prompt("The name of a body organ (e.g. heart, liver, spleen, etc.).");

let bodyPart1     = prompt("The name of a body part.");

let bodyPart2     = prompt("The name of a body part.");

let bodyPart3     = prompt("The name of a body part.");

let thing         = prompt("An object");

let thing2        = prompt ("An object you might give somebody you love.");

let thing3        = prompt ("An object you might give somebody you like.");

let adjective4    = prompt("A word used to describe the vehicle.");

let adjective5    = prompt("A word used to describe the vehicle.");


////////////////////////////////////////////////////////////////////////
// Let the user creat their own section numbers
let userNumber = prompt("Other than zero, what is your favorite number?");// Prompt the user to collect their favorite number that is not zero.

// Generate TWO more numbers called "number2" and "number3".
// by using any operator to change the number that the user submitted.
let number2 = userNumber * 4
let number3 = userNumber + 72

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;