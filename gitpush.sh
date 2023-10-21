# Add all changes in the current directory to the staging area.
git add .

# Prompt the user to enter a commit message.
echo 'Enter the commit message:'
read commitMessage

# Commit the changes with the provided message.
git commit -m "$commitMessage"

# Pull or sync changes from the "master" branch on the remote repository (assumes 'origin' is the remote name).
# You can choose between 'git pull' or 'git fetch' depending on your needs.
# 'git pull' will merge the remote changes with your local "master" branch, while 'git fetch' will only fetch the changes without merging.
git pull origin master

# Push the committed changes to the "master" branch on the remote repository.
git push origin master

# The 'read' command is used to keep the terminal open until the user presses Enter.
read