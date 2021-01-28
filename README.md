# EDIT-THIS-README

{
	"super console log": {
		"prefix": "lg",
		"body": [
			"console.log('=============================\\n')",
			"console.log('|| ${1}', ${1})",
			"console.log('\\n=============================')"
		],
		"description": "super console log"
	}
}

The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

You can also pass it directly to the URLSearchParams constructor if you want to generate query parameters in the way a <form> would do if it were using simple GET submission.

An object implementing FormData can directly be used in a for...of structure, instead of entries(): for (var p of myFormData) is equivalent to for (var p of myFormData.entries()).

Note: This feature is available in Web Workers.

Constructor
FormData()
Creates a new FormData object.
(https://developer.mozilla.org/en-US/docs/Web/API/FormData)