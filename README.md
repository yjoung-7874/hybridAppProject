# hybridAppProject


## NVM(Node Version Manager) on Mac


### NVM Install

#### 1. NVM Installation
```
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```
```
$ nvm ls

-bash: nvm: command not found
```
```
$ vi ~/.bash_profile
```
confirm code below in vi editor
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

#### 2. Apply
```
source ~/.bash_profile
```

#### 3. Confirm
```
$ nvm ls
```

```
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)
```

### Node Installation

#### 1. Install
```
$ nvm install 14.15.1
```

#### 2. Confirm
```
$ nvm ls
```
```
$ node -v
```
```
v14.15.1
```

#### 1. Install other version
```
$ nvm install 10.15.1
```

#### 2. Confirm
```
$ nvm ls
```
```
$node -v
v10.15.1
```

### 3. Change/Check node version

```
$ nvm use 14.15.1
```
```
$ node -v
```
```
v6.10.1
```
