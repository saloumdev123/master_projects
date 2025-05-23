package sen.saloum.JobConnect.service;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import sen.saloum.JobConnect.dto.JobDto;
import sen.saloum.JobConnect.model.Job;
import sen.saloum.JobConnect.repos.JobRepository;

import java.util.List;

@Service
public class JobService {


    private final  JobRepository jobRepository;

    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public Page<JobDto> getAllJobs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Job> jobPage = jobRepository.findAll(pageable);
        return jobPage.map(this::toDto);
    }

    public JobDto getJobById(Long id) {
        return toDto(jobRepository.findById(id).orElseThrow());
    }

    public JobDto toDto(Job job) {
        JobDto dto = new JobDto();
        BeanUtils.copyProperties(job, dto);
        return dto;
    }
    public JobDto saveJob(JobDto jobDto) {
        Job job = toEntity(jobDto);
        Job savedJob = jobRepository.save(job);
        return toDto(savedJob);
    }


    public Job toEntity(JobDto dto) {
        Job job = new Job();
        BeanUtils.copyProperties(dto, job);
        return job;
    }
}
