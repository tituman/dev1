<?php
//[{"domains":["fh-wels.at","fh-ooe.at","fhooe.at"],"iter":9,"addOnes":true},{"domains":["cardcomplete.com"],"iter":1,"addOnes":true},{"domains":["google.com","google"],"iter":2,"addOnes":false},{"domains":["ebay"],"iter":1,"addOnes":false},{"domains":["evernote.com"],"iter":1,"addOnes":false},{"domains":["pearl.de","pearl.at"],"iter":0,"addOnes":false},{"domains":["miles-and-more.com","worldshop.eu"],"iter":0,"addOnes":false},{"domains":["shroomery"],"iter":0,"addOnes":false},{"domains":["pinterest"],"iter":0,"addOnes":false},{"domains":["live"],"iter":4,"addOnes":false},{"domains":["quora"],"iter":0,"addOnes":false},{"domains":["slack"],"iter":0,"addOnes":false},{"domains":["thalia"],"iter":0,"addOnes":false},{"domains":["amazon"],"iter":0,"addOnes":false},{"domains":["ts.today"],"iter":0,"addOnes":false}]

header('Content-Type: application/json');
//return some sample data
echo 'jsonCallback('. json_encode( array("field1"=>"Maryland", "field2"=>"37", "field3"=>"43") ) .')';