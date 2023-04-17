import $ from "jquery";
import _ from "lodash";

let counter = 0;

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
		counter ++;
		$('#count').html(`${count} clicks on the button`);
}
$('button').on('click', _.debounce(updateCounter, 500));
