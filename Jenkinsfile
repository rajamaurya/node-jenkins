pipeline{
    agent any
    tools{
        nodejs 'NodeJS'
    }
    stages{
        stage("build"){
            steps{
                echo "building the node application"
                bat 'npm install'
                bat 'npm version'
                echo "<--------------------in process----------------------------->"
                bat 'node server.js'
            }
        }
        stage("test"){
            steps{
                echo "testing the app"
                bat 'npm test'
            }
        }
        stage("deploy"){
            steps{
                echo "deploying the app"
                bat 'npm run build'
            }
        }
    }
    post{
        always{
            echo "-------> Check the issues in case of failures. <------------"
        }
        failure{
            echo "----------> failures occured. check the configuration and script to avoid the same. <-------"
        }
        success{
            echo "---------> Successfully executed the pipeline. Congratulations!!. <--------"
        }
    }
}
