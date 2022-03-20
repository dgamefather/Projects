Dim objShell
Set objShell = WScript.CreateObject( "WScript.Shell" )
objShell.Run("""C:\Riot Games\League of Legends\LeagueClient.exe""")
Set objShell = Nothing

x=msgbox ("Don't close this prompt, OK? ", 0,"Overlay Steam, Run Launcher Games")