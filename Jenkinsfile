pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/AmanKumar-St/nodejs-jenkins-app.git' 
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-clock-app .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                    sh 'docker tag nodejs-clock-app $DOCKER_USER/nodejs-clock-app:latest'
                    sh 'docker push $DOCKER_USER/nodejs-clock-app:latest'
                }
            }
        }
    }
}
