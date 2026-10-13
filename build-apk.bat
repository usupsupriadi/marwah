@echo off
echo ==============================================
echo   Building Marwah Muslim Daily Android APK
echo ==============================================

echo [1/3] Building Web Assets...
call npm run build

echo [2/3] Syncing Capacitor Assets to Android...
call npx cap sync android

echo [3/3] Compiling APK with Gradle...
cd android
call gradlew.bat assembleDebug

echo ==============================================
if exist "app\build\outputs\apk\debug\app-debug.apk" (
    echo SUCCESS! APK successfully generated:
    echo %CD%\app\build\outputs\apk\debug\app-debug.apk
) else (
    echo Build failed or JDK/Android SDK needs to be configured.
    echo You can also open the 'android' folder in Android Studio!
)
echo ==============================================
pause
