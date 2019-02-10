
#clear


$PSScriptRoot
Get-ChildItem
$PSScriptRoot

$newRootName  = Read-Host -Prompt 'Input your new Namespace name'



$sabioJsName = 'sabio'
$newJsName = $newRootName.ToLower()

$sabioCSNs = 'Sabio.'
$sabioNewCSNs = $newRootName + '.'

$OldRootName = 'Sabio'

echo $newRootName
echo $newJsName
echo $sabioNewCSNs


 
 function startUp {

        DeleteStuff
        ChangeWebConfigs
        ChangeJsContent
        ChangeCsContent
        RenameCsFiles
        ShowSabioFolders
        RenameSabioFolders
      
        DeleteFolders
        ChangeSlnContent
        RenameProjectFiles 

        RenameSolution


 }


function Out-FileUtf8NoBom {

  [CmdletBinding()]
  param(
    [Parameter(Mandatory, Position=0)] [string] $LiteralPath,
    [switch] $Append,
    [switch] $NoClobber,
    [AllowNull()] [int] $Width,
    [Parameter(ValueFromPipeline)] $InputObject
  )

  #requires -version 3

  # Make sure that the .NET framework sees the same working dir. as PS
  # and resolve the input path to a full path.
  [Environment]::CurrentDirectory = $PWD
  $LiteralPath = [IO.Path]::GetFullPath($LiteralPath)

  # If -NoClobber was specified, throw an exception if the target file already
  # exists.
  if ($NoClobber -and (Test-Path $LiteralPath)) { 
    Throw [IO.IOException] "The file '$LiteralPath' already exists."
  }

  # Create a StreamWriter object.
  # Note that we take advantage of the fact that the StreamWriter class by default:
  # - uses UTF-8 encoding
  # - without a BOM.
  $sw = New-Object IO.StreamWriter $LiteralPath, $Append

  $htOutStringArgs = @{}
  if ($Width) {
    $htOutStringArgs += @{ Width = $Width }
  }

  # Note: By not using begin / process / end blocks, we're effectively running
  #       in the end block, which means that all pipeline input has already
  #       been collected in automatic variable $Input.
  #       We must use this approach, because using | Out-String individually
  #       in each iteration of a process block would format each input object
  #       with an indvidual header.
  try {
    $Input | Out-String -Stream @htOutStringArgs | % { $sw.WriteLine($_) }
  } finally {
    $sw.Dispose()
  }

}

function DeleteStuff
{
Delete-Packages
Delete-Trash '*.vssscc'
Delete-Trash '*.suo'
Delete-Trash '*.vsp*'
Delete-Trash '*.dll'
#Delete-Trash '*_references.js'
#Delete-Trash '*bower.json'


}



function RenameCsFiles
{
     Get-ChildItem . *Sabio*.cs -rec | Where-Object {!$_.PSIsContainer -eq $True} |
     Rename-Item -NewName { $_.name -replace $OldRootName,$newRootName }

     Get-ChildItem . *Sabio*.txt -rec | Where-Object {!$_.PSIsContainer -eq $True} |
     Rename-Item -NewName { $_.name -replace $OldRootName,$newRootName }

     Get-ChildItem . *Sabio*.html -rec | Where-Object {!$_.PSIsContainer -eq $True} |
     Rename-Item -NewName { $_.name -replace $OldRootName,$newRootName }

}

function ChangeCsContent
{

    $JsContentFiles = Get-ChildItem . *.asax -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {
      

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $OldRootName,$newRootName}  | 
        Out-File $file.FullName


    }

    $htmlFiles = Get-ChildItem . *.html -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $htmlFiles)
    {
        #$newRootName = 'Wise'
        #$OldRootName = 'Sabio'

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "Sabio",$newRootName}  | 
        Out-File $file.FullName


    }

   


    $JsContentFiles = Get-ChildItem . *.cs -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {
        #Add-Content echo $file.FullName

        #echo $file.FullName
        #$newRootName = 'Wise'
        #$OldRootName = 'Sabio'

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $OldRootName,$newRootName}  | 
        Out-File $file.FullName


    }

    $projFiles = Get-ChildItem . *.csproj -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $projFiles)
    {
        #Add-Content echo $file.FullName

        #$newRootName = 'Wise'
        #$OldRootName = 'Sabio'


        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $OldRootName,$newRootName}  | 
        Out-FileUtf8NoBom $file.FullName


    }
    

    $oldWebNS = $OldRootName + '.Web.'
    $newWebNS = $newRootName + '.Web.'
      
      
 
   
    $csHtmlFiles = Get-ChildItem . *.cshtml -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $csHtmlFiles)
    { 
  
        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldWebNS,$newWebNS}  | 
        Out-File $file.FullName   
    }



    $newDirPath = '"/'+ $newRootName + '/'
    $oldDirPath = '"/sabio/'

    foreach ($file in $csHtmlFiles)
    {

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace '"\/sabio\/' ,$newDirPath}  | 
        Out-File $file.FullName


    }


    

    $oldJSNS = $sabioJsName + '.page.'
    $newJSNs = $newJsName + '.page.'

    foreach ($file in $csHtmlFiles)
    {

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldJSNS ,$newJSNs}  | 
        Out-File $file.FullName


    }



    $newComment = $newRootName + 'Razor'
    $oldComment = 'SabioRazor'

    foreach ($file in $csHtmlFiles)
    {

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldComment ,$newComment}  | 
        Out-File $file.FullName


    }

    $newComment = $newRootName + ':'
    $oldComment = 'Sabio:'

    foreach ($file in $csHtmlFiles)
    {

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldComment ,$newComment}  | 
        Out-File $file.FullName


    }

    $newComment = "/" + $newJsName + '.'
    $oldComment = '/sabio.'
     
    $newBaseBundel = $newRootName + '/base'

 

    foreach ($file in $csHtmlFiles)
    {

      #  (Get-Content $file.FullName) | 
      #  Foreach-Object {$_ -replace $oldComment ,$newComment}  | 
      #  Out-File $file.FullName
    }



    #$sabio
    $oldJSNS = '\$sabio'
    $newJSNs = '$'+ $newJsName

    foreach ($file in $csHtmlFiles)
    {
        
      


        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldJSNS ,$newJSNs}  | 
       Out-File $file.FullName


        $jsFileName = $newJsName + ".js"

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "sabio.js" , $jsFileName}  | 
        Out-File $file.FullName

        $serviceObject = "a"+ $newJsName + "ServiceObject"

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "aSabioServiceObject" ,$serviceObject}  | 
        Out-File $file.FullName

        $jsStartUp = $newJsName + ".startUp"

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "sabio.startUp" ,  $jsStartUp }  | 
        Out-File $file.FullName


         $jsServices = $newJsName + ".services"
        
        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "sabio.services" ,  $jsServices }  | 
        Out-File $file.FullName


        $jsServices = $newJsName + ".tests"
        
        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "sabio.tests" ,  $jsServices }  | 
        Out-File $file.FullName


        ##########################################################################################
        $jsAppName =  $newRootName + "App"

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "SabioApp" ,$jsAppName }  | 
        Out-File $file.FullName

        ##########################################################################################

        $justName =  $newRootName + " "

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "Sabio " ,$justName }  | 
        Out-File $file.FullName

         $justName =  " " + $newRootName 

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace " Sabio" ,$justName }  | 
        Out-File $file.FullName

        $newBaseBundel = $newRootName + '/base'

          #for layout files that have bundles
        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace 'sabio/base' ,$newBaseBundel}  | 
        Out-File $file.FullName
        
        $newBaseBundel = $newRootName + '/core'

         #for layout files that have bundles
        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace 'sabio/core' ,$newBaseBundel}  | 
        Out-File $file.FullName

<#
        #>
    }


    $JsContentFiles = Get-ChildItem . *.asax -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {
      

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $OldRootName,$newRootName}  | 
        Out-File $file.FullName


    }

    $htmlFiles = Get-ChildItem . *web*.config -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $htmlFiles)
    {
       # $newRootName = 'Wise'
        #$OldRootName = 'Sabio'

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "Sabio",$newRootName}  | 
        Out-File $file.FullName


    }



}

function ChangeWebConfigs
{

    $htmlFiles = Get-ChildItem . *web*.config -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $htmlFiles)
    {
       # $newRootName = 'Wise'
        #$OldRootName = 'Sabio'

       # echo $file

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "Sabio",$newRootName}  | 
        Out-FileUtf8NoBom $file.FullName


    }
 }


function Delete-Trash($filePattern)
{
    $countInFiles = @( get-childitem . -include $filePattern -recurse ).Count;
    Write-Host ("Will be deleting " +  $countInFiles + " " + $filePattern + " files")

    Get-ChildItem -Path . -Include $filePattern -File -Recurse | foreach { $_.Delete()}

    $countInFiles = @( get-childitem . -include $filePattern -recurse ).Count;
    Write-Host ($filePattern + " files remaining: " +  $countInFiles + " ")
}

function DeleteFolders
{
    Get-ChildItem -Path *\Debug* -Recurse -Exclude 'repositories.config' | foreach{ Remove-Item $_.FullName -Recurse -Force }
    Get-ChildItem -Path *\bin* -Recurse -Exclude 'repositories.config' | foreach{ Remove-Item $_.FullName -Recurse -Force }
    Get-ChildItem -Path *\obj* -Recurse -Exclude 'repositories.config' | foreach{ Remove-Item $_.FullName -Recurse -Force }

    Get-ChildItem *.user -Exclude 'repositories.config' -Recurse | Where-Object {!$_.PSIsContainer -eq $True} | foreach {  $_.Delete() } 


}

function Delete-Packages
{
    $filePattern = "packages"

    $countInFiles = @(  Get-ChildItem -Path *\packages* -Recurse  ).Count; #-Exclude '*.config'

    Write-Host ("Will be deleting " +  $countInFiles + " " + $filePattern + " files")


   Remove-Item -Path *packages\* -Exclude *.config -Force -Recurse #-Verbose

}



function ShowJsFiles
{

    $jsFiles = Get-ChildItem . *sabio*.js -rec  | 
    Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $jsFiles)
    {
        #Add-Content echo $file.FullName

        echo $file.FullName

    }
}

function ShowSabioFolders
{
    $sabioFolders = Get-ChildItem . *Sabio* -rec | 
    Where-Object {$_.PSIsContainer -eq $True}
    foreach ($file in $sabioFolders)
    {
        echo $file.PSPath
    }

}

function RenameSabioFolders
{
    Get-ChildItem .  *Sabio* -rec | 
    Where-Object {$_.PSIsContainer -eq $True} | 
    Rename-Item -NewName {$_.name -replace 'Sabio',$newRootName }

}

function RenameJsFiles
{
    Get-ChildItem . *sabio*.js -rec | 
    Where-Object {!$_.PSIsContainer -eq $True} | 
    Rename-Item -NewName {$_.name -replace $sabioJsName,$newJsName }

}

function ChangeJsContent
{
    $JsContentFiles = Get-ChildItem . *sabio*.js -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $sabioJsName,$newJsName}  | 
        Out-File $file.FullName

        $ngName = "$" + $newJsName

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace "`$sabio",$ngName }  | 
        Out-File $file.FullName


    }


    foreach ($file in $JsContentFiles)
    {
        #Add-Content echo $file.FullName

        echo $file.FullName
      
		
		$NewAppNameCase = $newRootName + "App"
		$BadAppName = $newJsName + "App"

 


        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $BadAppName,$NewAppNameCase}  | 
        Out-File $file.FullName

    }
  
   

    $JsContentFiles = Get-ChildItem . *base*.js -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {
        #Add-Content echo $file.FullName

        #echo $file.FullName

       

        $ngName = "$" + $newJsName
       
        $oldJSNS = '\$sabio'

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -replace $oldJSNS,$ngName }  | 
        Out-File $file.FullName


    }



}




function ChangeSlnContent
{
    ECHO $OldRootName 
    ECHO $newRootName 

    $JsContentFiles = Get-ChildItem . *.sln -rec | Where-Object {!$_.PSIsContainer -eq $True}
    foreach ($file in $JsContentFiles)
    {

        ECHO $file.FullName

        (Get-Content $file.FullName) | 
        Foreach-Object {$_ -creplace $OldRootName,$newRootName}  | 
        Out-File $file.FullName


    }
}


function RenameSolution
{
    Get-ChildItem . *.sln -rec |
    Rename-Item -NewName ($newRootName + '.sln')

   # Get-ChildItem . *Starter.sln -rec | 
 #   Where-Object {!$_.PSIsContainer -eq $True} | 
  #  Rename-Item -NewName {$_.name -replace '.Starter',''}

}


function RenameProjectFiles
{
    Get-ChildItem . *Sabio*.csproj -rec | 
    Where-Object {!$_.PSIsContainer -eq $True} | 
    Rename-Item -NewName {$_.name -replace $OldRootName,$newRootName}

}

startUp














