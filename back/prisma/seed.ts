// import { PrismaClient } from "@prisma/client";
// import * as bcrypt from 'bcrypt';

// const prisma = new PrismaClient()

// async function main (){
//     // create users
//     const salt = await bcrypt.genSalt();
//     let user1 = await prisma.user.create({
//         data: {
//             name :  'd-grow1',
//             email:    'd-grow1@gmail.com',
//             clientId:client.id,    
//             employeeId:employee.id,
//             password  : await bcrypt.hash('1234', saltEm),
//             isClient  :  true ,  
//             mediaId   :  media.id
            
//     }})

//     let user2 = await prisma.user.create({
//         data: {
//             name :  'd-grow2',
//             email:    'd-grow2@gmail.com',
//             clientId:client.id,
            
//             employeeId:employee.id,
//             password  : await bcrypt.hash('1234', saltEm),
//             isClient  :  true ,  
//             mediaId   :  media.id,
            
// }})

//     let user3 = await prisma.user.create({
//         data: {
//             name :  'd-grow3',
//             email:    'd-grow3@gmail.com',
//             clientId:client.id,    
//             employeeId:employee.id,
//             password  : await bcrypt.hash('1234', saltEm),
//             isClient  :  true ,  
//             mediaId   :  media.id,
            
//     }})

//     //create client
//     let client1 = await prisma.client.create({
//         data: {
//             name :  'd-grow1',
//             email:    'd-grow1@gmail.com',
//             phone:"44444444",
//             address:"tunis"

//     }})
//     let client2 = await prisma.client.create({
//         data: {
//             name :  'd-grow2',
//             email:    'd-grow2@gmail.com',
//             phone:"44444444",
//             address:"tunis"

//     }})


//     let client3 = await prisma.client.create({
//         data: {
//             name :  'd-grow3',
//             email:    'd-grow3@gmail.com',
//             phone:"44444444",
//             address:"tunis"

//     }})



//     //create project
//     let project1 = await prisma.project.create({
//         data: {
//             name :  'project1',
//             clientId:client1.id,
//             employeeId:employee.id,
//             startDate:new Date(),
//             endDate:new Date(),
//             status:"pending"
//             }})
            
//     let project2 = await prisma.project.create({
//         data: {
//             name :  'project2',
//             clientId:client2.id,
//             employeeId:employee.id,
//             startDate:new Date(),
//             endDate:new Date(),
//             status:"pending"
//             }})
//     let project3 = await prisma.project.create({
//         data: {
//             name :  'project3',
//             clientId:client3.id,
//             employeeId:employee.id,
//             startDate:new Date(),
//             endDate:new Date(),
//             status:"pending"    
//             }})


// // create objective
// let objective1 = await prisma.objective.create({
//     data: {
//         name :  'objective1',
//         projectId:project1.id,
//         employeeId:employee.id,
//         startDate:new Date(),
//         endDate:new Date(),
//         status:"pending"
//         }})

// let objective2 = await prisma.objective.create({
//     data: {
//         name :  'objective2',
//         projectId:project2.id,
//         employeeId:employee.id,
//         startDate:new Date(),
//         endDate:new Date(),
//         status:"pending"
//         }})
//  let objective3 = await prisma.objective.create({
//             data: {
//                 name :  'objective3',
//                 projectId:project3.id,
//                 employeeId:employee.id,
//                 startDate:new Date(),
//                 endDate:new Date(),
//                 status:"pending"
//                 }})


// // create sub_Objective
// let subObjective1 = await prisma.subObjective.create({
//     data: {
//         name :  'subObjective1',
//         objectiveId:objective1.id,
//         employeeId:employee.id,
//         startDate:new Date(),
//         endDate:new Date(),
//         status:"pending"
// }})
// let subObjective2 = await prisma.subObjective.create({
// data: {
// name :  'subObjective2',
// objectiveId:objective1.id,
// employeeId:employee.id,
// startDate:new Date(),
// endDate:new Date(),
// status:"pending"
// }})
// let subObjective3 = await prisma.subObjective.create({
//     data: {
//         name :  'subObjective3',
//         objectiveId:objective1.id,
//         employeeId:employee.id,
//         startDate:new Date(),
//         endDate:new Date(),
//         status:"pending"
//         }})
        
        

// }