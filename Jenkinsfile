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
                    sh "aws ecr get-login-password --region ap-south-1 | sudo docker login --username AWS --password-stdin 571784116714.dkr.ecr.ap-south-1.amazonaws.com"
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
                    sh '''
                        OLD_TASK_DEF=$(aws ecs describe-task-definition --task-definition $(echo ${TASK_DEFINATION}|awk '{print tolower($0)}') --region ${REGION} --output json)
                        NEW_TASK_DEF=$(echo $OLD_TASK_DEF | jq --arg NDI 571784116714.dkr.ecr.ap-south-1.amazonaws.com/ecs-demo:v_${BUILD_NUMBER} '.taskDefinition.containerDefinitions[0].image=$NDI')
                        FINAL_TASK=$(echo $NEW_TASK_DEF | jq '.taskDefinition|{family: .family, volumes: .volumes, containerDefinitions: .containerDefinitions}')
                        aws ecs register-task-definition --region ${REGION} --family $(echo ${TASK_DEFINATION}|awk '{print tolower($0)}') --cli-input-json "$(echo $FINAL_TASK)"
                        aws ecs update-service --force-new-deployment --profile staging-non-mfa --region ${REGION} --service ${SERVICE} --task-definition $(echo ${TASK_DEFINATION}|awk '{print tolower($0)}') --cluster ${CLUSTER_NAME}

                    '''
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

