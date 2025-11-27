#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-214818-214827/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

