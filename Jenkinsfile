pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    stages{
        stage("build"){
            steps{
                echo "building the node application"
                sh "npm install"
                sh "npm version"
                sh "npm config ls"
            }
        }
        stage("test"){
            steps{
                echo "testing the app"
            }
        }
        stage("deploy"){
            steps{
                echo "deploying the app"
            }
        }
    }
}
