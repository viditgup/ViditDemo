pipeline {
    agent any
    stages {
        stage('list repo contents and working directory') {
            steps {
                script {
                    sh "ls"
                    sh "pwd"
                    sh "whoami"
                }
            }
        }
        stage('building docker image') {
            steps {
                script {
                    sh "sudo docker build -t571784116714.dkr.ecr.ap-south-1.amazonaws.com/ecs-demo:v_${BUILD_NUMBER} ."
                }
            }
        }
        stage('dcoker push') {
            steps {
                script {
                    sh "sudo docker push 571784116714.dkr.ecr.ap-south-1.amazonaws.com/ecs-demo:v_${BUILD_NUMBER}"
                }
            }
        }
        stage('deploying on microk8s') {
            steps {
                script {
                    sh "sudo microk8s.helm3 upgrade --install microk8s --set image.tag=v_${BUILD_NUMBER} /home/ubuntu/kubernetes-poc/"
                    sh "sudo microk8s.kubectl rollout status deployment.apps/microk8s-kubernetes-poc"
                    sh "sudo docker images > unused_images_cid"
                }
            }
        }
        stage ('remove images from build server') {
            steps {
                script {
                    try {
                        sh "sudo docker images -a -q > images_cid; sudo docker rmi `cat images_cid`"
                    } catch (err) {
                        echo err.getMessage()
                    }
                }
                echo currentBuild.result
            }
        }
        // stage('remove unused images') {
        //     steps {
        //         script {
        //             try {
        //                 sh "sudo docker rmi `cat unused_images_cid`"
        //             } catch (err) {
        //                 echo err.getMessage()
        //             }
        //         }
        //         echo currentBuild.result
        //     }
        // }
    }
}

