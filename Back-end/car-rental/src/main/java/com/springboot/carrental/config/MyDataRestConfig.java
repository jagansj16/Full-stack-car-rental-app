package com.springboot.carrental.config;

import com.springboot.carrental.entity.Car;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private String theAllowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){
//        HttpMethod[] theUnsupportedActions = {HttpMethod.POST,
//                HttpMethod.PATCH,
//                HttpMethod.DELETE,
//                HttpMethod.PUT};

        config.exposeIdsFor(Car.class);

//        disableHttpMethods(Car.class,config,theUnsupportedActions);

        cors.addMapping(config.getBasePath()+"/**")
                .allowedOrigins(theAllowedOrigins);
    }

//    private void disableHttpMethods(Class carClass,
//                                    RepositoryRestConfiguration config,
//                                    HttpMethod[] theUnsupportedActions) {
//
//        config.getExposureConfiguration()
//                .forDomainType(carClass)
//                .withItemExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)))
//                .withCollectionExposure(((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)));
//    }
}
