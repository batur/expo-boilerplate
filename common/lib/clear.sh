#!/usr/bin/env bash

# Stop the script if any command fails
set -e

echo "Removing node_modules..."
rm -rf node_modules

echo "Cleaning Yarn cache..."
yarn cache clean

echo "Reinstalling dependencies..."
yarn

echo "Clearing Watchman watches..."
watchman watch-del-all

echo "Removing haste-map and metro-cache..."
rm -fr "$TMPDIR"/haste-map-*
rm -rf "$TMPDIR"/metro-cache

echo "Starting Expo with a clear cache..."
npx expo start --clear