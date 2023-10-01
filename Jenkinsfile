pipeline{
    agent any
    stages{
        stage("build"){
            steps{
                echo "building the node application"
                npm install
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
