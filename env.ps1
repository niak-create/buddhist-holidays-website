# env.ps1 - Import portable tools into the current shell environment
$gitPath = "c:\วันสำคัญproject\.tools\git\cmd"
$nodePath = "c:\วันสำคัญproject\.tools\node"
$ghPath = "c:\วันสำคัญproject\.tools\gh"

$env:Path = "$gitPath;$nodePath;$ghPath;" + $env:Path
Write-Host "Local portable tools (Git, Node, GH CLI) added to current session path!" -ForegroundColor Green
