param([switch]$NoBrowser)

$ErrorActionPreference = "Stop"

$appDirectory = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$existingServer = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
if ($existingServer) {
    try {
        $health = Invoke-RestMethod -Uri "http://localhost:$port/api/health" -TimeoutSec 2
        if ($health.service -eq "journey-os") {
            $address = "http://localhost:$port/"
            Write-Host "Journey OS zaten çalışıyor: $address" -ForegroundColor Green
            if (-not $NoBrowser) { Start-Process $address }
            exit 0
        }
    } catch {}
    $port = 4174
}
$address = "http://localhost:$port/"

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCommand) {
    Write-Host "Node.js bulunamadı. Journey OS için Node.js 20 veya üzeri gerekli." -ForegroundColor Red
    Read-Host "Kapatmak için Enter'a basın"
    exit 1
}

Set-Location -LiteralPath $appDirectory
$env:PORT = "$port"
Write-Host "Journey OS başlatılıyor..." -ForegroundColor Cyan
Write-Host "Adres: $address"
Write-Host "Sunucuyu kapatmak için bu pencerede Ctrl+C kullanın."

if (-not $NoBrowser) { Start-Process $address }
& $nodeCommand.Source "server/index.js"
