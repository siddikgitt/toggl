# Schema

- user
    - Name, required
    - email, required
    - password, required

- client
    - name, required

- project
    - clientID, required
    - team_memberID, required
    - visibility, required
    - recurring, required
    - timeEstimate
    - hourlyRate
    - fixedRate

- task
    - userID, required
    - taskName, required
    - startTime
    - endTime

- team_member
    - userID, required
    - organization, required
    - workspace
    - groups
