# angularjs-starrating-
angularjs starrating  using font-awesome

This is an star rating angular directive  using font-awesome

<html >
<head>
	<script data-main="main" src="scripts/require.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/components-font-awesome/css/font-awesome.css">
</head>
<body ng-controller="appctrl">
	 <div >
            <star-rating currentrating="userrating" maxrating="10"></star-rating>
            <span ng-bind="userrating"></span>
        </div>
</body>
</html>
