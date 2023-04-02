#! /bin/bash
npm run build
cp -r build/* /gserver/web/.public/gpt4widget
