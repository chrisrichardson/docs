Search.setIndex({docnames:["_autosummary/basix","_autosummary/basix.cell","_autosummary/basix.finite_element","_autosummary/basix.lattice","_autosummary/basix.numba_helpers","_autosummary/basix.quadrature","_autosummary/basix.ufl_wrapper","_autosummary/basix.variants","demo/demo_create_and_tabulate.py","demo/demo_custom_element.py","demo/demo_custom_element_conforming_cr.py","demo/demo_dof_transformations.py","demo/demo_facet_integral.py","demo/demo_lagrange_variants.py","demo/demo_quadrature.py","demo/index","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["_autosummary/basix.rst","_autosummary/basix.cell.rst","_autosummary/basix.finite_element.rst","_autosummary/basix.lattice.rst","_autosummary/basix.numba_helpers.rst","_autosummary/basix.quadrature.rst","_autosummary/basix.ufl_wrapper.rst","_autosummary/basix.variants.rst","demo/demo_create_and_tabulate.py.rst","demo/demo_custom_element.py.rst","demo/demo_custom_element_conforming_cr.py.rst","demo/demo_dof_transformations.py.rst","demo/demo_facet_integral.py.rst","demo/demo_lagrange_variants.py.rst","demo/demo_quadrature.py.rst","demo/index.rst","index.rst"],objects:{"":[[0,0,0,"-","basix"]],"basix.CellType":[[0,2,1,"","hexahedron"],[0,2,1,"","interval"],[0,3,1,"","name"],[0,2,1,"","point"],[0,2,1,"","prism"],[0,2,1,"","pyramid"],[0,2,1,"","quadrilateral"],[0,2,1,"","tetrahedron"],[0,2,1,"","triangle"],[0,3,1,"","value"]],"basix.DPCVariant":[[0,2,1,"","diagonal_equispaced"],[0,2,1,"","diagonal_gll"],[0,2,1,"","horizontal_equispaced"],[0,2,1,"","horizontal_gll"],[0,2,1,"","legendre"],[0,3,1,"","name"],[0,2,1,"","simplex_equispaced"],[0,2,1,"","simplex_gll"],[0,2,1,"","unset"],[0,3,1,"","value"]],"basix.ElementFamily":[[0,2,1,"","BDM"],[0,2,1,"","CR"],[0,2,1,"","DPC"],[0,2,1,"","HHJ"],[0,2,1,"","N1E"],[0,2,1,"","N2E"],[0,2,1,"","P"],[0,2,1,"","RT"],[0,2,1,"","Regge"],[0,2,1,"","bubble"],[0,2,1,"","custom"],[0,3,1,"","name"],[0,2,1,"","serendipity"],[0,3,1,"","value"]],"basix.LagrangeVariant":[[0,2,1,"","chebyshev_centroid"],[0,2,1,"","chebyshev_isaac"],[0,2,1,"","chebyshev_warped"],[0,2,1,"","equispaced"],[0,2,1,"","gl_centroid"],[0,2,1,"","gl_isaac"],[0,2,1,"","gl_warped"],[0,2,1,"","gll_centroid"],[0,2,1,"","gll_isaac"],[0,2,1,"","gll_warped"],[0,2,1,"","legendre"],[0,3,1,"","name"],[0,2,1,"","unset"],[0,3,1,"","value"],[0,2,1,"","vtk"]],"basix.LatticeSimplexMethod":[[0,2,1,"","centroid"],[0,2,1,"","isaac"],[0,3,1,"","name"],[0,2,1,"","none"],[0,3,1,"","value"],[0,2,1,"","warp"]],"basix.LatticeType":[[0,2,1,"","chebyshev"],[0,2,1,"","equispaced"],[0,2,1,"","gl"],[0,2,1,"","gll"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.MapType":[[0,2,1,"","L2Piola"],[0,2,1,"","contravariantPiola"],[0,2,1,"","covariantPiola"],[0,2,1,"","doubleContravariantPiola"],[0,2,1,"","doubleCovariantPiola"],[0,2,1,"","identity"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.PolynomialType":[[0,2,1,"","legendre"],[0,3,1,"","name"],[0,3,1,"","value"]],"basix.QuadratureType":[[0,2,1,"","Default"],[0,2,1,"","gauss_jacobi"],[0,2,1,"","gll"],[0,3,1,"","name"],[0,3,1,"","value"],[0,2,1,"","xiao_gimbutas"]],"basix.cell":[[1,4,1,"","facet_jacobians"],[1,4,1,"","facet_normals"],[1,4,1,"","facet_orientations"],[1,4,1,"","facet_outward_normals"],[1,4,1,"","facet_reference_volumes"],[1,4,1,"","string_to_type"],[1,4,1,"","sub_entity_connectivity"],[1,4,1,"","type_to_string"],[1,4,1,"","volume"]],"basix.finite_element":[[2,1,1,"","FiniteElement"],[2,4,1,"","string_to_family"]],"basix.finite_element.FiniteElement":[[2,3,1,"","M"],[2,5,1,"","apply_dof_transformation"],[2,5,1,"","apply_dof_transformation_to_transpose"],[2,5,1,"","apply_inverse_transpose_dof_transformation"],[2,5,1,"","base_transformations"],[2,3,1,"","cell_type"],[2,3,1,"","coefficient_matrix"],[2,3,1,"","degree"],[2,3,1,"","degree_bounds"],[2,3,1,"","dim"],[2,3,1,"","discontinuous"],[2,3,1,"","dof_transformations_are_identity"],[2,3,1,"","dof_transformations_are_permutations"],[2,3,1,"","dpc_variant"],[2,3,1,"","dual_matrix"],[2,3,1,"","entity_closure_dofs"],[2,3,1,"","entity_dofs"],[2,5,1,"","entity_transformations"],[2,3,1,"","family"],[2,5,1,"","get_tensor_product_representation"],[2,3,1,"","has_tensor_product_factorisation"],[2,3,1,"","interpolation_is_identity"],[2,3,1,"","interpolation_matrix"],[2,3,1,"","lagrange_variant"],[2,3,1,"","map_type"],[2,3,1,"","num_entity_closure_dofs"],[2,3,1,"","num_entity_dofs"],[2,3,1,"","points"],[2,5,1,"","pull_back"],[2,5,1,"","push_forward"],[2,5,1,"","tabulate"],[2,3,1,"","value_shape"],[2,3,1,"","value_size"],[2,3,1,"","wcoeffs"],[2,3,1,"","x"]],"basix.lattice":[[3,4,1,"","simplex_method_to_string"],[3,4,1,"","string_to_simplex_method"],[3,4,1,"","string_to_type"],[3,4,1,"","type_to_string"]],"basix.numba_helpers":[[4,1,1,"","List"],[4,4,1,"","apply_dof_transformation"],[4,4,1,"","apply_dof_transformation_hexahedron"],[4,4,1,"","apply_dof_transformation_interval"],[4,4,1,"","apply_dof_transformation_prism"],[4,4,1,"","apply_dof_transformation_pyramid"],[4,4,1,"","apply_dof_transformation_quadrilateral"],[4,4,1,"","apply_dof_transformation_tetrahedron"],[4,4,1,"","apply_dof_transformation_to_transpose"],[4,4,1,"","apply_dof_transformation_to_transpose_hexahedron"],[4,4,1,"","apply_dof_transformation_to_transpose_interval"],[4,4,1,"","apply_dof_transformation_to_transpose_prism"],[4,4,1,"","apply_dof_transformation_to_transpose_pyramid"],[4,4,1,"","apply_dof_transformation_to_transpose_quadrilateral"],[4,4,1,"","apply_dof_transformation_to_transpose_tetrahedron"],[4,4,1,"","apply_dof_transformation_to_transpose_triangle"],[4,4,1,"","apply_dof_transformation_triangle"]],"basix.numba_helpers.List":[[4,5,1,"","append"],[4,5,1,"","clear"],[4,5,1,"","copy"],[4,5,1,"","count"],[4,5,1,"","empty_list"],[4,5,1,"","extend"],[4,5,1,"","index"],[4,5,1,"","insert"],[4,5,1,"","pop"],[4,5,1,"","remove"],[4,5,1,"","reverse"],[4,5,1,"","sort"]],"basix.quadrature":[[5,4,1,"","string_to_type"],[5,4,1,"","type_to_string"]],"basix.ufl_wrapper":[[6,1,1,"","BasixElement"],[6,1,1,"","FiniteElementBase"],[6,4,1,"","compute_signature"],[6,4,1,"","map_type_to_string"]],"basix.ufl_wrapper.BasixElement":[[6,5,1,"","mapping"]],"basix.ufl_wrapper.FiniteElementBase":[[6,5,1,"","cell"],[6,5,1,"","degree"],[6,5,1,"","extract_component"],[6,5,1,"","extract_reference_component"],[6,5,1,"","extract_subelement_component"],[6,5,1,"","extract_subelement_reference_component"],[6,5,1,"","family"],[6,5,1,"","is_cellwise_constant"],[6,5,1,"","mapping"],[6,5,1,"","num_sub_elements"],[6,5,1,"","quadrature_scheme"],[6,5,1,"","reference_value_shape"],[6,5,1,"","reference_value_size"],[6,5,1,"","sub_elements"],[6,5,1,"","symmetry"],[6,5,1,"","value_shape"],[6,5,1,"","value_size"],[6,5,1,"","variant"]],"basix.variants":[[7,4,1,"","dpc_variant_to_string"],[7,4,1,"","lagrange_variant_to_string"],[7,4,1,"","string_to_dpc_variant"],[7,4,1,"","string_to_lagrange_variant"]],basix:[[0,1,1,"","CellType"],[0,1,1,"","DPCVariant"],[0,1,1,"","ElementFamily"],[0,1,1,"","LagrangeVariant"],[0,1,1,"","LatticeSimplexMethod"],[0,1,1,"","LatticeType"],[0,1,1,"","MapType"],[0,1,1,"","PolynomialType"],[0,1,1,"","QuadratureType"],[1,0,0,"-","cell"],[0,4,1,"","compute_interpolation_operator"],[0,4,1,"","create_custom_element"],[0,4,1,"","create_element"],[0,4,1,"","create_lattice"],[2,0,0,"-","finite_element"],[0,4,1,"","geometry"],[0,4,1,"","index"],[3,0,0,"-","lattice"],[0,4,1,"","make_quadrature"],[4,0,0,"-","numba_helpers"],[5,0,0,"-","quadrature"],[0,4,1,"","tabulate_polynomials"],[0,4,1,"","topology"],[6,0,0,"-","ufl_wrapper"],[7,0,0,"-","variants"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","property","Python property"],"4":["py","function","Python function"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:property","4":"py:function","5":"py:method"},terms:{"0":[0,1,2,4,8,9,10,11,12,13,14],"000010":11,"00238095238095":14,"002393509368731209":14,"00833333333333":14,"00833333333333334":14,"0b000010":11,"1":[0,2,8,10,11,12,13,14,16],"10":[0,2],"11":[0,10],"11901":11,"12":10,"120":14,"15":13,"175":13,"180":13,"1d":0,"1p_i":9,"2":[0,2,8,9,10,12,14,16],"20":0,"2008":13,"2020":13,"2021":11,"2102":11,"25":8,"2d":[0,2,11],"2y":9,"3":[0,2,8,9,10,11,12,14],"30":10,"3d":[0,2,10,11,12],"3y":14,"4":[0,2,8,9,10,11,12,14],"420":14,"5":[0,2,8,9,12,14,16],"50":13,"6":[0,2,8,9,10],"7":[0,2,10],"8":[0,2,9,10],"9":[0,2,8,9],"case":[0,11],"char":[8,11],"class":[0,2,4,6],"const":11,"default":[0,4,14],"do":9,"enum":[2,3,5,7],"final":9,"float":1,"function":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16],"import":[8,9,10,11,12,13,14],"int":[0,1,2,4,6,8,11,14],"n\u00e9d\u00e9lec":16,"new":4,"return":[0,1,2,3,4,5,6,7,8,10,11,14,16],"static":11,"throw":[0,2],"true":[9,10,11,13],"while":14,A:[0,4,6,9,13,14,16],As:[9,11,12,13,14],For:[0,2,4,8,9,10,11,13,14],IN:4,If:[0,9,11,14],In:[0,8,9,10,11,12,13,14],It:[2,11,16],Its:2,Not:6,On:2,The:[0,1,2,3,4,5,7,8,9,10,11,12,13,14,16],There:[0,9],These:[0,2,9,11,14],To:[9,11,12,13,14],_:[9,10,11],_basixcpp:[0,1,2,3,5,7],_sequenc:4,ab:[11,13],abc:4,abl:14,abov:9,adapt:8,add:9,adjac:12,adjust:11,again:14,all:[0,4,6,8,9,11,14],allclos:[9,11],alloc:4,allow:6,along:[0,9],alongsid:16,also:[4,10,11,12],an:[0,1,2,4,9,10,11,12,13,14,15,16],ani:4,appear:[2,9],append:[4,9,10],appli:[0,2,4,11],apply_dof_transform:[2,4,11],apply_dof_transformation_hexahedron:4,apply_dof_transformation_interv:4,apply_dof_transformation_pr:4,apply_dof_transformation_pyramid:4,apply_dof_transformation_quadrilater:4,apply_dof_transformation_tetrahedron:4,apply_dof_transformation_to_transpos:[2,4],apply_dof_transformation_to_transpose_hexahedron:4,apply_dof_transformation_to_transpose_interv:4,apply_dof_transformation_to_transpose_pr:4,apply_dof_transformation_to_transpose_pyramid:4,apply_dof_transformation_to_transpose_quadrilater:4,apply_dof_transformation_to_transpose_tetrahedron:4,apply_dof_transformation_to_transpose_triangl:4,apply_dof_transformation_triangl:4,apply_inverse_transpose_dof_transform:2,appropri:2,approx:[13,14],approxim:[13,14],ar:[0,1,2,4,8,9,11,12,13,14],arbitrari:[0,10,11],arg0:[0,1,2],arg1:[0,2],arg2:[0,2],arg3:[0,2],arg4:0,arg5:0,arg6:0,arg7:0,arg8:0,arg:[0,4],argc:[8,11],argument:[2,4,8,12],argv:[8,11],arrai:[0,1,4,8,9,10,11,12],arrang:2,arxiv:11,ask:8,assembl:11,assert:[8,9],associ:[0,1,9,11],attribut:11,auto:[8,11],ax:10,axi:13,back:0,base:[0,2,4,6,11],base_transform:[2,11],basi:[0,2,6,8,9,10,11,12,13,16],basic:6,basix:[8,9,10,11,12,13,14],basixel:6,bdm:0,been:14,befor:4,begin:[9,10,11,13],behav:13,better:13,between:[0,2],block:[0,11],block_siz:2,bool:[0,1,9,11,13],boolalpha:11,both:[0,11],bound:13,boundari:[0,13],box:4,bubbl:[0,16],built:9,c:[0,16],c_0:6,c_1:6,calcul:9,call:2,can:[0,2,8,9,10,11,12,13,14,16],cancel:0,cannot:11,cc:11,ccr_triangle_3:10,ccr_triangle_4:10,cell:[0,2,4,6,8,9,11,12,13,14],cell_facet_jacobian:1,cell_facet_norm:1,cell_facet_orient:1,cell_facet_outward_norm:1,cell_facet_reference_volum:1,cell_info:[2,4,11],cell_typ:[0,1,2,8,11],cell_volum:1,celltyp:[0,1,8,9,10,11,12,13,14],centroid:0,chang:4,chebyshev:0,chebyshev_centroid:0,chebyshev_isaac:0,chebyshev_warp:0,check:11,chose:12,chosen:0,ciarlet:9,classmethod:4,clear:4,code:[8,11,14],coeffici:[0,16],coefficient_matrix:2,collect:4,column:12,com:[9,10],combin:[9,11],common:2,compar:9,compil:4,complet:0,compon:[0,2,6],componenet:12,compress:0,comput:[0,2,6,8,9,13,14,15,16],compute_interpolation_oper:0,compute_signatur:6,confirm:[9,11],conform:[15,16],connect:[1,12],connected_dim:1,connected_entity_n0:1,connected_entity_n1:1,consid:13,constant:[6,13],construct:11,constructor:4,contain:[0,2,9],continu:0,contrast:9,contravariantpiola:[0,9],control:14,convert:[1,3,5,6,7],coordin:[9,12],copi:[0,4],core:[0,4],correct:[11,14],correctli:9,could:11,count:[4,12,14],cout:[8,11],covariantpiola:0,cover:0,cr:[0,16],creat:[0,2,4,10,11,12,13,15,16],create_ccr_triangl:10,create_custom_el:[0,9,10],create_el:[0,8,9,11,12,13,14,16],create_lattic:[0,9,10,11,13],critic:2,cross:12,crouzeix:[15,16],custom:[0,4,6,10,15,16],d2n:0,d:[0,9,14],data:[2,4,6,8,9,11,12],decim:14,def:[10,14],defel:[9,10],defin:[0,9,12,13,14,15,16],definit:[0,9,10,16],degre:[0,2,6,8,10,12,13,14,16],degree_bound:2,demo:[9,10,12,13,14,16],demonstr:11,deriv:[0,2,8,12],describ:[9,11,13],design:2,detail:[9,10,11],determin:2,detj:2,diagon:2,diagonal_equispac:0,diagonal_gl:0,dict:[2,4,6],dictionari:11,differ:[0,11],dim:[0,1,2,8,11],dimens:[0,1,2,4,8,9,11,12],direct:[0,6,9,11,13],directli:[6,11],disagre:11,discontinu:[0,2,9,13],discuss:11,doc:[9,16],document:9,doe:[4,11],dof:[0,2,4,8,9,13,15,16],dof_n:10,dof_transformations_are_ident:[2,11],dof_transformations_are_permut:[2,11],dokken:11,dolfinx:[4,16],domain:6,dot:[9,11],doubl:[8,11],doublecontravariantpiola:0,doublecovariantpiola:0,dpc:[0,7],dpc_variant:2,dpc_variant_to_str:7,dpcvariant:[0,7],dual_matrix:2,dvariant:0,dx2:0,e:10,each:[0,1,2,4,6,8,9,11,13],easier:11,edg:[0,2,4,8,9,11,13],edge_count:4,edge_cout:4,edge_num:11,edge_pt:10,effect:[2,11],effici:11,eg:0,element:[0,2,4,6,15,16],element_from:0,element_to:0,elementfamili:[0,2,8,9,11,12,13,14],els:10,empti:[4,9],empty_list:4,end:[4,11],endl:11,entiti:[0,1,2,4,9,11,12],entity__transform:11,entity_closure_dof:2,entity_dof:[2,4,11],entity_n:1,entity_transform:[2,4,11],entri:[9,11,12],equal:[8,9,10,11,13,14],equispac:[0,8,9,10,11,12,13,14],error:[0,2],estim:13,evalu:[0,9,13],even:13,everi:[12,14],exact:[9,14],exactli:[0,12,14],exampl:[2,8,9,11,12,13,14],except:11,exhibit:13,exist:2,expans:0,expect:[13,14],explicitli:13,extend:4,exterior:0,extern:0,extra:8,extract:6,extract_compon:6,extract_reference_compon:6,extract_subelement_compon:6,extract_subelement_reference_compon:6,ey:10,f401:10,f:[9,10,14],face:[2,4,11],face_count:4,face_typ:4,facet:[1,15,16],facet_jacobian:[1,12],facet_norm:1,facet_orient:1,facet_outward_norm:[1,12],facet_reference_volum:1,factoris:2,fals:[0,4,9,10,11],famili:[0,2,6,8,11],featur:14,fenicsproject:9,fenicsx:16,ffcx:16,fifth:12,fig:10,figsiz:10,figur:10,find:[0,2,11],finit:[0,2,6,8,9,11,13,16],finite_el:[0,16],finiteel:[0,2,6,8,11,16],finiteelementbas:6,first:[2,4,8,9,10,11,12,14],float64:[0,1,2,4],fn:2,follow:[2,8,9,10,11,13,14],forc:14,form:[1,11],forward:0,found:[9,10],four:[9,11,13],fourth:[2,8],free:13,freedom:[0,8,9,11,12,13],from:[0,2,4,8,9,10,11,12,13,14],g:14,galerkin:13,gauss:[0,13,14],gauss_jacobi:[0,14],gdim:0,gener:[0,4,11],geometr:[0,2],geometri:[0,1,10,12],get:[1,2,6,8,11,12,14],get_tensor_product_represent:2,give:[2,4,11],given:[0,2,6],gl:0,gl_centroid:0,gl_isaac:0,gl_warp:0,gll2:13,gll:[0,13],gll_centroid:0,gll_isaac:[0,13],gll_warp:[0,13],global:[6,11],greater:[0,8],grid:0,group:2,h:[8,11],ha:[0,2,4,8,9,11,14],had:8,hand:14,has_tensor_product_factoris:2,have:[0,9,10,12,13],helper:4,here:10,hesthaven:13,hexahedra:16,hexahedron:[0,4,11],hhj:0,high:[1,11,13],higher:[2,8,10],highest:[0,9,10,14],highest_complete_degre:0,horizont:2,horizontal_equispac:0,horizontal_gl:0,how:[8,9,10,11,12,13,14],hpp:[8,11],html:[9,10],http:[9,10,11],i:[4,6,9,10],ident:[0,9,10,11],idx:[0,2],ie:[0,2,14],implement:[4,6,10],includ:[0,2,8,9,11,12,13],incorrectli:11,index:[0,2,4,6,11,12],indexerror:4,indic:[0,1,2,9,12,13,14],info:[2,11],inform:[1,12],initi:6,initialis:6,inplac:4,input:[8,9,13,14],insert:4,instanc:0,instead:11,int32:4,int_0:9,integ:[2,4,6],integr:[0,2,9,15,16],integrand:[9,12],interfac:[0,4,8,11],interior:[0,8,9],intern:4,interpol:[0,13,16],interpolation_is_ident:2,interpolation_matrix:2,interv:[0,2,4,9,10,11,16],intial:4,invers:2,inward:2,iomanip:11,is_cellwise_const:6,isaac:[0,13],issu:11,item:[4,11],item_typ:4,iter:4,its:[2,8,11,13,14],j:[2,10],j_i:2,j_j:2,jacobi:14,jacobian:[1,2,12],k:[2,8,10],k_i:2,k_j:2,kei:4,kernel:4,keyword:4,kind:[2,11],know:11,kth:0,kwarg:[0,4],l2piola:0,l:[2,13],lagrang:[0,2,7,8,10,12,14,15,16],lagrange_degree_2:11,lagrange_vari:[2,8,11],lagrange_variant_to_str:7,lagrangevari:[0,7,8,11,12,13,14],lambda:13,larg:[11,13],largest:9,last:4,lattic:[0,8,11,13],latticesimplexmethod:[0,3],latticetyp:[0,3,9,10,11,13],lead:13,lebesgu:13,left:[9,11,13],legendr:[0,9,10,13],len:[9,10],length:2,leqslant1:9,leqslant2:9,librari:[0,16],like:2,linalg:12,list:[0,1,2,4,6,9],listtyp:4,lobatto:[0,13],local:11,look:[12,13],loop:11,low:1,lower:13,lsttype:4,lvariant:0,ly:0,m:[0,2,9,10],machin:14,made:11,mai:11,main:[8,9,11],major:0,make:[0,11,13],make_quadratur:[0,9,10,12,14],make_quadrautr:14,manipul:[1,3,5,7],map:[0,2,6,9,11,12,13],map_typ:[0,2,6],map_type_to_str:6,mapped_point:12,maptyp:[0,9,10],mat:10,match:11,math:11,mathrm:[9,14],matplotlib:10,matric:[0,2,9,11],matrix:[0,2,9,11],max:13,max_:13,maximum:0,mean:[6,11],member:0,meminfo:4,mesh:11,method:[0,3,11,13],midpoint:9,mod_data:11,modul:0,more:[6,11],mpl_toolkit:10,mplot3d:10,much:13,multipl:[0,2,9],multipli:[9,12],must:[0,8,9,11,12],mutablesequ:4,n1e:[0,11],n2e:0,n:[0,8,9,10,11,13,14],name:[0,1],nbase:11,nd:2,ndarrai:[0,1,2,4],ndegre:11,ndof:10,necessarili:10,nedelec:[2,11],need:[0,9,11],neighbour:11,nentiti:11,next:[8,9,12,14],nodal:13,node:13,none:[0,4,6],noqa:10,norm:12,normal:[1,2,9,12],normal_deriv:12,note:[0,2,10,12,14],now:[8,9,10,12,14],np:[4,8,9,10,11,12,13,14],npoli:10,ntabul:8,num:0,num_entity_closure_dof:2,num_entity_dof:2,num_point:11,num_sub_el:6,numba:4,number:[0,1,2,4,6,8,9,11,12,13],numpi:[0,1,2,8,9,10,11,12,13,14],object:[4,6,16],observ:13,obtain:[13,14],occurr:4,often:11,omit:0,onc:14,one:[2,6,9,10,11],onli:[0,2,4,8,12],onto:13,oper:0,option:[0,4],order:[0,1,2,9,11,12,14],org:[9,11],orient:[1,2,4,11],original_data:11,orthogon:9,orthonorm:9,other:[0,9,14],our:[9,11,12,13,14],out:[0,2,4,11],outer:0,output:1,outward:[1,2],over:[2,6,11,12,14],overload:0,p:[0,8,9,10,11,12,13,14],p_0:[9,14],p_8:9,p_:14,p_i:[9,14],paramet:[0,1,2,3,4,5,7,13],part:16,pass:[4,8,12,13,14],peak:13,per:[2,9],perform:2,permut:[2,15,16],phenomenon:13,phi_0:13,phi_:13,phi_i:13,physic:[2,11],place:[4,8,9,13,14],plot:10,plt:10,plu:9,png:10,point:[0,1,2,8,9,11,12,13,14],point_index:0,poli:[9,10],polygon:11,polyhedr:11,polynomi:[0,6,10,14,16],polynomialtyp:[0,9,10],polyset:9,polytyp:0,pop:4,possibl:9,pp:13,pre:4,precis:14,prefer:2,present:4,previou:9,print:[8,9,11,12,13,14],prism:[0,4,11,16],product:[2,6,9,12],project:10,properti:[0,2],propos:13,provid:[8,9,11],pt:[9,10],pull:0,pull_back:2,push:0,push_forward:2,put:[9,11],pybind11_builtin:[0,2],pybind11_object:[0,2],pyplot:10,pyramid:[0,11,16],python:[0,14],q:0,quad_schem:6,quadrat:9,quadratur:[0,6,9,12,15,16],quadrature_schem:6,quadraturerul:5,quadraturetyp:[0,5,14],quadrilater:[0,4,8,9,11,16],quartic:14,quit:11,r:[0,13],rais:4,rang:[4,9,10,11],ravairt:16,raviart:[2,9,15,16],recommend:4,recurs:[6,13],refer:[0,1,2,6,11,12,13],reference_value_s:6,reference_value_shap:6,reflect:[2,11],regg:0,regular:0,rel:6,relev:11,remov:4,repeat:2,repres:[0,2,4,6,9],represent:[2,9],respect:14,result:[0,8,12,14],revers:[2,4,11],richardon:11,right:[9,11,13],rotat:[2,11],row:[2,9],rt:[0,9],rule:[0,5,9,12,15,16],run:[8,11],rung:13,runtim:[0,2,16],s:[0,4,8,10,11,13],same:[0,8,9,11],savefig:10,scalar:[2,9],scatter:10,scheme:6,scrogg:11,second:[2,8,9,11],see:[4,8,9,11,12],self:[0,2],sequenc:4,serendip:0,set:[0,2,8,9,13,14],shape:[0,2,4,6,8,9,11],share:2,should:[2,13],show:[2,8,10,11,14],shown:10,signatur:6,simpl:6,simpler:11,simplex:3,simplex_equispac:0,simplex_gl:0,simplex_method:[0,3],simplex_method_to_str:3,simplic:[0,13],singl:9,size:[0,2,8,9,11,12],size_jacobian:12,small:11,smaller:13,so:[2,8,9,10,11,12,13,14],some:[2,4],sort:4,space:[0,2,4,6,8,9,10,12,13,14],span:[0,9,10,11],spatial:6,start:[4,12,13,14],std:[8,11],stop:4,store:2,str:[1,2,3,5,7],string:[1,2,3,4,5,6,7,11],string_to_dpc_vari:7,string_to_famili:2,string_to_lagrange_vari:7,string_to_simplex_method:3,string_to_typ:[1,3,5],sub:[6,11,12],sub_el:6,sub_entity_connect:[1,12],subblock:2,subel:6,subent:[1,2,4],subplot:10,subset:13,subspac:0,sum:[9,10,12,13,14],sum_:9,sum_i:[13,14],support:4,surfac:0,swap:2,symmetri:6,t:4,tab:[8,12,13],tabul:[0,2,9,10,11,12,13,14,15,16],tabulate_polynomi:[0,9,10],take:[4,12,13,14],tangent:2,tdim:[0,1,4],tell:11,tensor:2,term:9,tetrahedr:[0,2,12],tetrahedra:16,tetrahedron:[0,2,4,11,12],than:[0,8,10,13],thei:[0,11],them:0,therefor:[9,14],thi:[0,1,2,4,6,8,9,10,11,12,13,14,16],third:[2,8,14],thoma:[2,16],three:[12,14],too:8,topolog:[0,1,4,10],transform:[0,2,4,15,16],transpos:[2,4],triangl:[0,2,4,9,11,12,13,14,16],triangular:[0,2,12],trivial:0,tupl:[0,2,6],two:[0,2,9,11,12,14],type:[0,1,2,3,4,5,6,7,8,9,11,13,14],type_to_nam:11,type_to_str:[1,3,5],typedlist:4,u:2,ufl:[6,16],unset:0,up:2,us:[0,1,2,4,6,8,9,10,11,12,13,15],usabl:4,user:4,v0:10,v1:10,v:10,valu:[0,2,4,6,8,9,11,12,13,14],value_s:[2,6],value_shap:[0,2,6],valueerror:4,variant:[0,6,8,11,15,16],vector:[0,1,2,8,11,12],verifi:11,version:[0,2],vertex:[0,1,8,9],vertic:[2,12],via:[0,11],view:8,visualis:10,volum:1,vs:0,vtk:0,w_0:14,w_:14,w_if:14,wai:[9,13],want:[9,12,14],warburton:13,warp:[0,13],wcoeff:[0,2,9,10],we:[8,9,10,11,12,13,14],weight:[0,9,12,14],welcom:16,well:[11,13],what:9,when:[0,4,9,11,13],where:[2,9,11,13],whether:[0,1,6,9,13],which:[0,2,6,9,11,12],within:14,withing:14,work:11,would:[8,14],wrap:6,wrapper:6,write:4,written:0,wrong:11,wt:[9,10],x:[0,2,9,10,12,13,14],xiao_gimbuta:0,xio:[8,11],xt:[8,11],xtensor:[8,11],xtl:11,xy:9,y:[0,2,9,10,12,14],you:9,z:[0,10],zero:[9,10],zeroth:12},titles:["basix","basix.cell","basix.finite_element","basix.lattice","basix.numba_helpers","basix.quadrature","basix.ufl_wrapper","basix.variants","Creating and tabulating an element","Creating a custom element","Defining conforming Crouzeix\u2013Raviart elements","DOF permutations and transformations","Computing a facet integral","Variants of Lagrange elements","Creating and using a quadrature rule","Demos","Basix Python interface documentation"],titleterms:{"1":9,"2":11,"5":11,"function":14,"n\u00e9d\u00e9lec":11,an:8,basi:14,basix:[0,1,2,3,4,5,6,7,16],bubbl:9,c:[8,11],cell:1,coeffici:9,comput:12,conform:10,content:16,cr:10,creat:[8,9,14],crouzeix:10,custom:9,defin:10,degre:[9,11],demo:[8,11,15],document:16,dof:11,element:[8,9,10,11,13],facet:12,finite_el:2,integr:[12,14],interfac:16,interpol:9,lagrang:[9,11,13],lattic:3,numba_help:4,permut:11,polynomi:9,python:16,quadratur:[5,14],ravairt:9,raviart:10,rule:14,tabl:16,tabul:8,thoma:9,transform:11,triangl:10,ufl_wrapp:6,us:[14,16],variant:[7,13]}})