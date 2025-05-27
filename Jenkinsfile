pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
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
                script {
                    dockerImage = docker.build("sungodnika7/nodejs-jenkins-app")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                withDockerRegistry([ credentialsId: 'dockerhub-creds', url: '' ]) {
                    script {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }
}
