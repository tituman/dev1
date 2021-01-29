<?php

header('Content-Type: application/json');
//return some sample data
echo 'jsonCallback('. json_encode( array("field1"=>"Maryland", "field2"=>"37", "field3"=>"43") ) .')';

