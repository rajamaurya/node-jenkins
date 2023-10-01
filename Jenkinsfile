pipeline{
    agent any
    tools{
        NodeJS '20.8.0'
    }
    stages{
        stage("build"){
            steps{
                echo "building the node application"
                sh "npm install"
                sh "npm version"
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
