package com.backend.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.www.model.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

}
