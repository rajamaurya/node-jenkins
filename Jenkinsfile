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
