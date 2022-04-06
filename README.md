# Hardhat Boilerplate


1) Clone the repo:
```shell
git clone https://github.com/ge0rgiev/hardhat-boilerplate new-project-name
```

2) Install dependencies:
```shell
cd new-project-name && npm i
```

3) Change the origin:
```shell
git remote set-url origin git@github.com:USER/REPOSITORY.git
```

4) Commit and push the changes:
```shell
git add . && git commit -m "Initial commit" && git branch -M main && git push -u origin main
```

5) Initialize the local configuration and set API keys and stuff:
```shell
cp .env.example .env
```

5) Compile and run the tests:
```shell
hh compile && hh test
```
