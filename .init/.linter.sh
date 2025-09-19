#!/bin/bash
cd /home/kavia/workspace/code-generation/tic-tac-toe-web-53399-53409/frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

