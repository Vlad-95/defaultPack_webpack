import $ from "jquery";

function myFunction(e) {
    console.log($('h1').length);
    console.log($('h1').text());
}

export default myFunction;