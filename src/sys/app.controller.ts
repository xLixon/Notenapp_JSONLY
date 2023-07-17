import {Controller, Get, Post, Query, Headers, Body, Delete} from '@nestjs/common';
import {AppService} from './app.service';

// import './controller/students/controller';

import {createStudent} from '../func/students/create';
import {getStudent} from "../func/students/get";
import {deleteStudent} from '../func/students/delete';

import {addGrade} from "../func/grades/add";
import {getGrade} from "../func/grades/get";
import {getAllGrades} from "../func/grades/getAll";
import {deleteGrade} from "../func/grades/delete";

import {db} from '../conf/db';
import {query} from '../func/sql';
import {actionLog} from '../func/logger';


@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }


    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    // Student Management Section

    @Post("students")
    async createStudents(@Body() body, @Headers('Authorization') authstring) {
        return await createStudent(body, authstring, db(), query)
    }

    @Get("students")
    async getStudents(@Query('id') id, @Headers('Authorization') authstring): Promise<string> {
        return await getStudent(id, authstring, db(), query);
    }

    @Delete("students")
    async deleteStudents(@Query('id') id, @Headers('Authorization') authstring) {
        return await deleteStudent(id, authstring, db(), query)
    }

    // Grades Management Section

    @Post("grades")
    createGrades(@Body() body, @Headers('Authorization') authstring) {
        return addGrade(body, authstring, db(), query)
    }

    @Get("grades")
    async getAllGrades(@Query('id') id, @Headers('Authorization') authstring): string {
        return await getGrade(id, authstring, db(), query);
    }

    @Get("gradesa")
    async getAllGrades(@Query('id') id, @Headers('Authorization') authstring): string {
        return await getAllGrades(id, authstring, db(), query);
    }

    @Delete("grades")
    async deleteGrades(@Query('id') id, @Headers('Authorization') authstring) {
        return await deleteGrade(id, authstring, db(), query)
    }




}

