#!/bin/bash

GREEN='\033[0;32m'
LIGHT_BLUE='\033[1;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

printf "${YELLOW}Installing npm packages...${NC}\n"
npm install
# install required libraries
printf "${GREEN}Done${NC}"

printf "\n\n${YELLOW}Adding scripts to bash_profile...${NC}"
node ./setup.js
# add scripts to bash_profile
printf "${GREEN}\nDone${NC}"

printf "\n\n${YELLOW}Reloading bach_profile...${NC}"
source ~/.bash_profile
# reload bash_profile to make scripts available for immediate use
printf "${GREEN}\nDone${NC}"

printf "\n\n${LIGHT_BLUE}You can now use helpfull scripts!${NC}"
